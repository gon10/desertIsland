import Image from "next/image";
import React from "react";
import {
  CircleStack,
  EnvelopIcon,
  GitHubIcon,
  GlobeAlt,
  InformationCircle,
  TwitterIcon,
  ViewsIcon,
  YoutubeIcon,
} from "./icons";
import styles from "./navBar.module.css";
import world_icon from "../public/img/world_icon-wobg.png";
import island_icon from "../public/img/island_icon-wobg.png";
import shelter_icon from "../public/img/shelter_icon-wobg.png";
import avatar_icon from "../public/img/avatar_icon-wobg.png";
import Link from "next/link";

export function RGBMenu() {
  return <div className={styles.rgb_menu}>rgb</div>;
}

export default function Navbar() {
  return (
    <div>
      <div className="">
        <nav className="">
          {/* <div className={`${styles.rgb_menu} w-full h-1`}></div> */}
          <div className="flex h-13">
            <div className="hidden md:flex flex-[1] items-center ">
              <div className="flex items-center justify-center flex-1 bg-[#1c1d1b] hover:bg-[#2a2a2a]  w-full h-full">
                <YoutubeIcon />
              </div>
              <div className="flex items-center justify-center flex-1 bg-[#1c1d1b]  hover:bg-[#2a2a2a] w-full h-full">
                <GlobeAlt />
              </div>
              <div className="flex items-center justify-center flex-1 bg-[#1c1d1b] hover:bg-[#2a2a2a] w-full h-full">
                <EnvelopIcon />
              </div>
              <div className="flex items-center justify-center flex-1 bg-[#1c1d1b] hover:bg-[#2a2a2a] w-full h-full">
                <CircleStack />
              </div>
            </div>

            <div className="hidden md:flex sm:flex-col flex-[2] items-center bg-[#1b2b2c] p-4 overflow-hidden">
              {/* <div className="flex-[1]">Peter Lvl:51</div>
              <div className="flex-1 min-w-fit text-center">
                Fire:3 Water:5 Grass:0
  </div>*/}
              <div className="flex-1 min-w-fit text-right">Rank:234/5432</div>
            </div>
            <div className="flex justify-center flex-1">
              <span className="inline-block h-14 w-14 overflow-hidden rounded-full ">
                {/* <Image
                  src="/img/avatar.png"
                  alt="bg"
                  width={50}
                  height={50}
                  // className="aspect-video"
                  style={{
                    // maxWidth: "100%",
                    // height: "auto",
                    objectFit: "cover",
                  }}
                /> */}
              </span>
            </div>
            <div className=" flex flex-[2] items-center bg-[#081517] border border-[#5a5a5a] rounded-lg my-1">
              <div
                className="flex items-end justify-end flex-1 border-[#5a5a5a]  hover:bg-[#1b2b2c] rounded-r-lg w-10 h-full "
                style={{
                  background: `url(${avatar_icon.src}) left top no-repeat transparent`,
                  // backgroundPosition: "0px -54px",
                  backgroundSize: "contain",
                }}
              >
                <Link href={"/"}>
                  Char
                  {/* <Image
                    src="/img/avatar.png"
                    alt="bg"
                    width={50}
                    height={50}
                    // className="aspect-video"
                    style={{
                      // maxWidth: "100%",
                      // height: "auto",
                      objectFit: "cover",
                    }}
                  /> */}
                </Link>
              </div>
              <div
                className="flex items-end justify-end flex-1 border-[#5a5a5a] border-l hover:bg-[#1b2b2c] rounded-r-lg w-10 h-full "
                style={{
                  background: `url(${shelter_icon.src}) left top no-repeat transparent`,
                  // backgroundPosition: "0px -54px",
                  backgroundSize: "contain",
                }}
              >
                <Link href={"/shelter"}>Shelter</Link>
              </div>

              <div
                className="flex items-end justify-end  flex-1 hover:bg-[#1b2b2c] border-[#5a5a5a] border-l w-10 h-full "
                style={{
                  background: `url(${island_icon.src}) left top no-repeat transparent`,
                  // backgroundPosition: "0px -54px",
                  backgroundSize: "contain",
                }}
              >
                <Link href={"/island"}>Island</Link>
              </div>
              <div
                className="flex items-end justify-end  flex-1 hover:bg-[#1b2b2c] border-[#5a5a5a] border-l w-10 h-full"
                style={{
                  background: `url(${world_icon.src}) left top no-repeat transparent`,
                  backgroundSize: "contain",
                }}
              >
                <Link href={"/world"}>World</Link>
              </div>
            </div>
            <div className=" flex flex-[1] "></div>
            <div className=" flex flex-[1] items-center my-1">
              {/* <div className="flex items-center justify-center flex-1 border-[#5a5a5a] border-b p-2 m-2 bg-[#10100f] hover:bg-[#353c36] w-full h-full">
                BTN1
              </div> */}
              <div className="flex items-center justify-center flex-[2] border-[#5a5a5a] border-b p-2 m-2 bg-[#10100f] hover:bg-[#353c36] w-full h-full">
                Language
              </div>
              <div className="flex items-center justify-center flex-1 border-[#5a5a5a] border-b p-2 m-2 bg-[#10100f] hover:bg-[#353c36] w-full h-full">
                Settings
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
