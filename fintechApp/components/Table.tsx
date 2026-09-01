import React from "react";
import { EmptyList } from "./emptyList";

type Column<T> = {
  title: string;
  width?: string;
  align?: "left" | "center" | "right";
  selector: (item: T) => React.ReactNode | string;
};

type TableProps<T> = {
  data?: T[];
  columns?: Column<T>[];
};

export const CustomTable = <T,>({ data = [], columns = [] }: TableProps<T>) => {
  return (
    <div className="w-full h-full bg-gray-100 p-5 rounded-2xl">
      <div className="max-h-80 overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-b-blue-900 bg-white">
              {columns.map((column) => (
                <th key={column.title} style={{ width: column.width }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          {data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={columns.length}>
                  <EmptyList />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-gray-600">
              {data.map((item, rowIndex) => (
                <tr key={rowIndex} className="border-b border-b-blue-800">
                  {columns.map((column) => (
                    <td key={column.title}>
                      <p className="min-h-10 flex items-center">
                        {column.selector(item)}
                      </p>
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
