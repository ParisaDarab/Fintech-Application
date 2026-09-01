import React, { ComponentType, ReactNode } from "react";
import { SidebarItem } from "./Components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DashboardItemProps {
  title: string;
  icon?: ComponentType<{ className?: string }> | ReactNode | IconDefinition;
}

export const DashboardItem = ({ title, icon }: DashboardItemProps) => {
  // 1. Check for FontAwesome Object
  const isFontAwesome = !!(
    icon &&
    typeof icon === "object" &&
    "prefix" in icon &&
    "iconName" in icon
  );

  // 2. Check for Component Reference and isolate its type
  const IconComponent =
    typeof icon === "function"
      ? (icon as ComponentType<{ className?: string }>)
      : null;

  // 3. Isolate the ReactNode/Safe items for the fallback
  const renderableNode =
    !isFontAwesome && !IconComponent ? (icon as ReactNode) : null;

  return (
    <SidebarItem className="text-grayTextColor flex gap-4">
      <span>
        {isFontAwesome ? (
          <FontAwesomeIcon icon={icon as IconDefinition} className="w-5 h-5" />
        ) : IconComponent ? (
          <IconComponent className="w-5 h-5" />
        ) : (
          renderableNode
        )}
      </span>
      {title}
    </SidebarItem>
  );
};
