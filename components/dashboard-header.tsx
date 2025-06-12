"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname(); // Get current URL path

  if (pathname === "/auth/login" || pathname === "/auth/forgot-password" || pathname === "/auth/verfiy_email" || pathname === "/auth/reset-password") {
    return null; // Don't render sidebar for login page
  }
  return (
    <header className="border-b bg-white px-6 py-4 fixed w-full ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Welcome</p>
          <h1 className="text-xl font-semibold">Mr. John</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="icon"> */}
          <svg
             width="40"
            height="40"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="67.5"
              height="67.5"
              rx="33.75"
              fill="#EFF6FF"
            />
            <rect
              x="0.25"
              y="0.25"
              width="67.5"
              height="67.5"
              rx="33.75"
              stroke="#BFDBFE"
              strokeWidth="0.5"
            />
            <g clipPath="url(#clip0_2418_10926)">
              <path
                d="M34 22C27.3828 22 22 27.3828 22 34C22 40.6172 27.3828 46 34 46C40.6172 46 46 40.6163 46 34C46 27.3837 40.6172 22 34 22ZM34 44.141C28.409 44.141 23.859 39.592 23.859 34C23.859 28.408 28.409 23.859 34 23.859C39.591 23.859 44.141 28.408 44.141 34C44.141 39.592 39.592 44.141 34 44.141Z"
                fill="black"
                fillOpacity="0.9"
              />
              <path
                d="M38.6475 32.9864H34.9295V29.2684C34.9295 28.7553 34.514 28.3389 33.9999 28.3389C33.4859 28.3389 33.0704 28.7553 33.0704 29.2684V32.9864H29.3524C28.8384 32.9864 28.4229 33.4029 28.4229 33.916C28.4229 34.4291 28.8384 34.8455 29.3524 34.8455H33.0704V38.5635C33.0704 39.0766 33.4859 39.4931 33.9999 39.4931C34.514 39.4931 34.9295 39.0766 34.9295 38.5635V34.8455H38.6475C39.1615 34.8455 39.577 34.4291 39.577 33.916C39.577 33.4029 39.1615 32.9864 38.6475 32.9864Z"
                fill="black"
                fillOpacity="0.9"
              />
            </g>
            <defs>
              <clipPath id="clip0_2418_10926">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(22 22)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* </Button> */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="67.5"
              height="67.5"
              rx="33.75"
              fill="#EFF6FF"
            />
            <rect
              x="0.25"
              y="0.25"
              width="67.5"
              height="67.5"
              rx="33.75"
              stroke="#BFDBFE"
              strokeWidth="0.5"
            />
            <path
              d="M37.1336 33.002C37.7155 38.3774 40 40.002 40 40.002H22C22 40.002 25 37.8686 25 30.402C25 28.7046 25.6321 27.0767 26.7574 25.8765C27.8826 24.6762 29.4087 24.002 31 24.002C31.3373 24.002 31.6717 24.0323 32 24.0914"
              stroke="black"
              strokeOpacity="0.9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43 30.002C44.6569 30.002 46 28.6588 46 27.002C46 25.3451 44.6569 24.002 43 24.002C41.3431 24.002 40 25.3451 40 27.002C40 28.6588 41.3431 30.002 43 30.002Z"
              fill="#F43F5E"
              stroke="#F43F5E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.46 43.002C25.2842 43.305 25.0318 43.5566 24.7282 43.7315C24.4246 43.9064 24.0804 43.9984 23.73 43.9984C23.3796 43.9984 23.0354 43.9064 22.7318 43.7315C22.4282 43.5566 22.1758 43.305 22 43.002"
              stroke="black"
              strokeOpacity="0.9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Avatar className="size-[50px]">
            <AvatarImage src="/user.avif" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
