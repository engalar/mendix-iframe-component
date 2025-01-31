import { createElement, ReactElement, useEffect, useRef } from "react";

import { IFrameComponentContainerProps } from "../typings/IFrameComponentProps";

import "./ui/IFrameComponent.scss";
import classNames from "classnames";
import IFrame from "@uiw/react-iframe";
import { enumReferrer, enumSandbox, executeAction, getDynamicValue } from "./util";

const DEFAULT_CLASSNAME = "mendix-iframe-component";

const IFrameComponent = ({
    urlExpression,
    srcExpression,
    uiSizeWidth,
    uiSizeHeight,
    miscLoading,
    miscSandbox,
    miscReferrerPolicy,
    miscAllowExpression,
    onLoad,
    onMouseOver,
    onMouseOut,
    class: className,
    style: styles,
    name
}: IFrameComponentContainerProps): ReactElement => {
    // const url = urlExpression.status === ValueStatus.Available ? urlExpression.value : "";
    const url = getDynamicValue("", urlExpression);
    const src = getDynamicValue(null, srcExpression);
    const width = getDynamicValue(undefined, uiSizeWidth);
    const height = getDynamicValue(undefined, uiSizeHeight);
    const loading = miscLoading === "notSet" ? undefined : miscLoading;
    const allow = getDynamicValue(undefined, miscAllowExpression);
    const referrerpolicy = enumReferrer(miscReferrerPolicy);
    const sandbox = enumSandbox(miscSandbox);

    const iframeRef = useRef<HTMLIFrameElement>(null);
    // const [receivedMessage, setReceivedMessage] = useState<any>(null);

    // 监听 iframe 发来的消息
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.source !== iframeRef.current?.contentWindow) {
                return;
            }
            //setReceivedMessage(event.data);
            //onPostMessage?.(event.data);
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    // 发送消息到 iframe
    // const sendMessageToIframe = (message: any) => {
    //     if (iframeRef.current?.contentWindow) {
    //         iframeRef.current.contentWindow.postMessage(message, "*");
    //     }
    // };

    // 如果 URL 或 src 无效，直接返回一个占位符
    if ((!url || url === null) && !src) {
        return <div className={classNames(DEFAULT_CLASSNAME, name, "no-valid-source")} />;
    }

    return (
        <IFrame
            src={src || url}
            className={className}
            width={width}
            height={height}
            loading={loading === "auto" ? "eager" : loading}
            sandbox={sandbox}
            referrerPolicy={referrerpolicy}
            allow={allow}
            style={styles}
            onLoad={() => executeAction(onLoad)}
            onMouseOver={() => executeAction(onMouseOver)}
            onMouseOut={() => executeAction(onMouseOut)}
            ref={iframeRef}
        />
    );
};

export default IFrameComponent;
