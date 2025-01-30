/**
 * This file was generated from IFrameComponent.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export type MiscLoadingEnum = "notSet" | "auto" | "eager" | "lazy";

export type MiscReferrerPolicyEnum = "notSet" | "noReferrer" | "noReferrerWhenDowngrade" | "origin" | "orginWhenCrossOrigin" | "sameOrigin" | "strictOrigin" | "strictOriginWhenCrossOrigin" | "unsafeUrl";

export type MiscSandboxEnum = "notSet" | "allowForms" | "allowModals" | "allowOrientationLock" | "allowPointerLock" | "allowPopups" | "allowPopupsToEscapeSandbox" | "allowPresentation" | "allowSameOrigin" | "allowScripts" | "allowStorageAccessByUserActivation" | "allowTopNavigation" | "allowTopNavigationByUserActivation";

export interface IFrameComponentContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    urlExpression: DynamicValue<string>;
    srcExpression?: DynamicValue<string>;
    uiSizeWidth?: DynamicValue<string>;
    uiSizeHeight?: DynamicValue<string>;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandbox: MiscSandboxEnum;
    miscAllowExpression?: DynamicValue<string>;
    onLoad?: ActionValue;
    onMouseOver?: ActionValue;
    onMouseOut?: ActionValue;
}

export interface IFrameComponentPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    urlExpression: string;
    srcExpression: string;
    uiSizeWidth: string;
    uiSizeHeight: string;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandbox: MiscSandboxEnum;
    miscAllowExpression: string;
    onLoad: {} | null;
    onMouseOver: {} | null;
    onMouseOut: {} | null;
}
