"use client";
import React, { MouseEventHandler, ReactNode, useState } from "react";
import { NewspaperIcon, PhoneIcon, FireIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function island() {
  return (
    // <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-[repeat(3,minmax(100px,_1fr))]">
      <Card
        title="Floresta"
        description="asd sad asd sad asd asd sad"
        action="Apanhar madeira"
      />
      <Card
        title="Pedreira"
        description="asd sad asd sad asd asd sad"
        action="Minar pedra"
      />
      <Card
        title="Mina"
        description="asd sad asd sad asd asd sad"
        action="Minar metal"
      />
      <Card
        title="Gruta dos Goblins"
        description="asd sad asd sad asd asd sad"
        level={1}
      />
      <Card
        title="Vale dos Ogres"
        description="asd sad asd sad asd asd sad"
        level={2}
      />
      <Card
        title="Bosque sombrio"
        description="asd sad asd sad asd asd sad"
        level={3}
      />
    </div>
  );
}

type ModalProps = {
  content: string;
  children?: ReactNode;
};

const MyModal = ({ content, children }: ModalProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseEnter");
    const x = event.clientX;
    const y = event.clientY;
    setPosition({ x, y });
    setShowModal(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseMove");
    const x = event.clientX;
    const y = event.clientY;
    setPosition({ x, y });
  };

  const handleClose = () => {
    console.log("handleClose");
    setShowModal(false);
  };

  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: `${position.y}px`,
    left: `${position.x}px`,
    backgroundColor: "white",
    border: "1px solid black",
    padding: "10px",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleClose}
      // onMouseOut={handleClose}
      className="truncate text-sm font-medium"
    >
      {children}
      {showModal && (
        <div
          //does not work because it changes at runtime and tailwind does not generate classes at runtime
          // className={`fixed top-[${position.y}px] left-[${position.x}px] border bg-slate-500 rounded p-4 `}
          style={modalStyle}
        >
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export function Card({
  title,
  description,
  level,
  action,
}: {
  title: string;
  description: string;
  level?: number;
  action?: string;
}) {
  return (
    <div className="flex-1 col-span-1 divide-y divide-gray-200 border border-gray-200 shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <p className="mt-1 truncate text-sm ">{title}</p>
          <div className="flex items-center space-x-3">
            <MyModal content={description}>
              <h3 className="truncate text-sm font-medium">{description}</h3>
            </MyModal>
            {/* <h3 className="truncate text-sm font-medium text-gray-900">
              {"person.name"}
            </h3> */}
            {level && (
              <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Level: {level}
              </span>
            )}
          </div>
        </div>
        {/* <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src={"person.imageUrl"}
          alt=""
        /> */}
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <Link
              href={`game`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold "
            >
              <FireIcon className="h-5 w-5 " aria-hidden="true" />
              {action ? action : "Lutar"}
            </Link>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${"person.telephone"}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold "
            >
              <NewspaperIcon className="h-5 w-5 " aria-hidden="true" />
              Newspaper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
