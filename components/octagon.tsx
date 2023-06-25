import React from "react";

export default function Octagon(props: React.PropsWithChildren) {
  return (
    <div
      className="flex flex-1 aspect-square bg-[#262524] m-2 lg:m-4 "
      style={{
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
    >
      <div
        className="flex aspect-square bg-[#191414] m-1"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      >
        <div
          className="flex flex-1 aspect-square bg-[#262524] m-2 lg:m-4 "
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          <div
            className="grid content-center aspect-square bg-[#081517] m-1 text-center px-4 py-6"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          >
            <p>
              Asdasdasdasd Asdasdasdasd Asdasdasdasd Asdasdasdasd Asdasdasdasd
            </p>
            <p>
              Asdasdasdasd Asdasdasdasd Asdasdasdasd Asdasdasdasd Asdasdasdasd
              Asdasdasdasd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
