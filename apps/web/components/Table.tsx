import React from "react";
import { EmptyList } from "./EmptyList";

type Column<T> = {
  title: string;
  width?: string;
  align?: "left" | "center" | "right";
  selector: (item: T, index: number) => React.ReactNode;
};

type TableProps<T> = {
  data?: T[];
  columns?: Column<T>[];
};

export const CustomTable = <T,>({ data = [], columns = [] }: TableProps<T>) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto max-h-96 overflow-auto">
        <table className="w-full min-w-160 border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80  sticky top-0 z-10">
              {columns.map((column) => (
                <th
                  key={column.title}
                  scope="col"
                  style={{ width: column.width }}
                  className={`
                    px-5 py-4
                    text-xs font-semibold uppercase
                    tracking-wider text-slate-500
                    ${column.align === "center" ? "text-center" : ""}
                    ${column.align === "right" ? "text-right" : "text-left"}
                  `}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          {data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <EmptyList />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-slate-100">
              {data.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="
                    group
                    transition-colors duration-200
                    hover:bg-slate-100
                  "
                >
                  {columns.map((column) => (
                    <td
                      key={column.title}
                      style={{ width: column.width }}
                      className={`
                        px-5 py-4
                        text-sm text-slate-600
                        ${column.align === "center" ? "text-center" : ""}
                        ${column.align === "right" ? "text-right" : "text-left"}
                      `}
                    >
                      <div className="flex min-h-10 items-center">
                        {column.selector(item, rowIndex)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
