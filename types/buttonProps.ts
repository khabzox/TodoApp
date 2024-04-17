import { ReactNode } from "react";
export type buttonProps = {
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
};