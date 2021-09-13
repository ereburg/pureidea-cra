import Link from "next/link"

export default function FooterBottom(): JSX.Element {
  return (
    <div className="border-t-2">
      <div className="container px-6 py-7">
        <div className="flex text-sm font-light tracking-wide">
          <p className="">
            © 2021 <strong className="text-black font-bold">PUREIDEA</strong>
            {` `}
            DEVELOPMENT
          </p>
          <p className="ml-12">
            <Link href="/privacy-policy">
              <a className="underline hover:no-underline">
                Политика конфиденциальности
              </a>
            </Link>
          </p>
          <p className="ml-6">
            <Link href="/privacy-policy">
              <a className="underline hover:no-underline">
                {` `}
                Про личные данные
              </a>
            </Link>
          </p>
          <p className="ml-auto">
            <a className="flex items-center" href="mailto:hello@pureidea.ru">
              <svg
                className="mr-3"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 1L1 8.43478L8.04348 11.1739L19 1V1Z"
                  stroke="#1CC8EE"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9995 1L15.8691 15.4783L8.04297 11.1739L18.9995 1V1Z"
                  stroke="#1CC8EE"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.04297 11.1738V17.4347L10.7821 12.739"
                  stroke="#1CC8EE"
                  strokeLinejoin="round"
                />
              </svg>
              hello@pureidea.ru
            </a>
          </p>
          <ul className="flex gap-4 items-center ml-12">
            {/* Fb */}
            <li>
              <a className="block w-5 group">
                <svg
                  className="w-full h-auto text-grey-7"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      className="group-hover:fill-[url(#paint0_linear)] fill-current"
                      d="M10.02 23.88C4.32 22.86 0 17.94 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.94 19.68 22.86 13.98 23.88L13.32 23.34H10.68L10.02 23.88Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M16.6801 15.3602L17.2201 12.0002H14.0401V9.66018C14.0401 8.70018 14.4001 7.98018 15.8401 7.98018H17.4001V4.92018C16.5601 4.80018 15.6001 4.68018 14.7601 4.68018C12.0001 4.68018 10.0801 6.36018 10.0801 9.36018V12.0002H7.08008V15.3602H10.0801V23.8202C10.7401 23.9402 11.4001 24.0002 12.0601 24.0002C12.7201 24.0002 13.3801 23.9402 14.0401 23.8202V15.3602H16.6801Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="12.0006"
                      y1="23.1654"
                      x2="12.0006"
                      y2="-0.00442066"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0062E0" />
                      <stop offset="1" stopColor="#19AFFF" />
                    </linearGradient>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            {/* VK */}
            <li>
              <a className="block w-5 group">
                <svg
                  className="w-full h-auto group-hover:text-[#2787F5] text-grey-7"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.32 0H15.68C22.4 0 24 1.6 24 8.32V15.68C24 22.4 22.4 24 15.68 24H8.32C1.6 24 0 22.4 0 15.68V8.32C0 1.6 1.6 0 8.32 0Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.6527 8.26828C19.7639 7.89747 19.6527 7.625 19.1234 7.625H17.3734C16.9285 7.625 16.7233 7.86037 16.6121 8.11992C16.6121 8.11992 15.7221 10.2891 14.4614 11.6981C14.0536 12.106 13.8681 12.2358 13.6457 12.2358C13.5344 12.2358 13.3734 12.106 13.3734 11.7352V8.26828C13.3734 7.82331 13.2443 7.625 12.8734 7.625H10.1234C9.84538 7.625 9.67815 7.83152 9.67815 8.02725C9.67815 8.44907 10.3085 8.54634 10.3734 9.73292V12.31C10.3734 12.875 10.2714 12.9774 10.0489 12.9774C9.45566 12.9774 8.01256 10.7986 7.15666 8.30534C6.98893 7.82075 6.82069 7.625 6.37344 7.625H4.62344C4.12344 7.625 4.02344 7.86037 4.02344 8.11992C4.02344 8.58344 4.61673 10.8824 6.78589 13.923C8.23199 15.9994 10.2694 17.125 12.1234 17.125C13.2358 17.125 13.3734 16.875 13.3734 16.4444V14.875C13.3734 14.375 13.4788 14.2752 13.8311 14.2752C14.0906 14.2752 14.5356 14.405 15.5739 15.4061C16.7604 16.5927 16.956 17.125 17.6234 17.125H19.3734C19.8734 17.125 20.1234 16.875 19.9792 16.3816C19.8214 15.8899 19.2549 15.1765 18.5032 14.3308C18.0953 13.8488 17.4835 13.3297 17.298 13.0701C17.0385 12.7364 17.1127 12.5881 17.298 12.2914C17.298 12.2914 19.4302 9.28796 19.6527 8.26828V8.26828Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            {/* Inst */}
            <li>
              <a className="block w-5 group">
                <svg
                  className="w-full h-auto text-grey-7"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      className="group-hover:fill-[url(#paint0_radial)] fill-current"
                      d="M12.0055 0.181641C7.07078 0.181641 5.62756 0.186731 5.34702 0.210003C4.33432 0.294183 3.70416 0.453632 3.01764 0.79544C2.48856 1.05816 2.0713 1.3627 1.65949 1.78959C0.909518 2.56811 0.454986 3.5259 0.290445 4.66441C0.210448 5.21712 0.187176 5.32985 0.182449 8.15304C0.180631 9.0941 0.182449 10.3326 0.182449 11.9938C0.182449 16.9246 0.187903 18.3664 0.211539 18.6464C0.293354 19.6318 0.447895 20.2518 0.775158 20.9299C1.40059 22.2281 2.5951 23.2026 4.00233 23.5662C4.48959 23.6917 5.02776 23.7607 5.71864 23.7935C6.01136 23.8062 8.99491 23.8153 11.9803 23.8153C14.9656 23.8153 17.951 23.8117 18.2364 23.7971C19.0364 23.7595 19.501 23.6971 20.0146 23.5644C21.4309 23.1989 22.6036 22.239 23.2417 20.9226C23.5626 20.2609 23.7254 19.6172 23.799 18.6833C23.815 18.4796 23.8217 15.233 23.8217 11.9907C23.8217 8.74793 23.8145 5.5073 23.7985 5.30367C23.7239 4.35461 23.5612 3.71644 23.2299 3.04192C22.9581 2.48975 22.6563 2.0774 22.2181 1.65578C21.4362 0.908891 20.4798 0.45436 19.3402 0.290001C18.7881 0.210185 18.6781 0.18655 15.8527 0.181641H12.0055Z"
                      fill="url(#paint0_radial)"
                    />
                    <path
                      className="group-hover:fill-[url(#paint1_radial)] fill-current"
                      d="M12.0055 0.181641C7.07078 0.181641 5.62756 0.186731 5.34702 0.210003C4.33432 0.294183 3.70416 0.453632 3.01764 0.79544C2.48856 1.05816 2.0713 1.3627 1.65949 1.78959C0.909518 2.56811 0.454986 3.5259 0.290445 4.66441C0.210448 5.21712 0.187176 5.32985 0.182449 8.15304C0.180631 9.0941 0.182449 10.3326 0.182449 11.9938C0.182449 16.9246 0.187903 18.3664 0.211539 18.6464C0.293354 19.6318 0.447895 20.2518 0.775158 20.9299C1.40059 22.2281 2.5951 23.2026 4.00233 23.5662C4.48959 23.6917 5.02776 23.7607 5.71864 23.7935C6.01136 23.8062 8.99491 23.8153 11.9803 23.8153C14.9656 23.8153 17.951 23.8117 18.2364 23.7971C19.0364 23.7595 19.501 23.6971 20.0146 23.5644C21.4309 23.1989 22.6036 22.239 23.2417 20.9226C23.5626 20.2609 23.7254 19.6172 23.799 18.6833C23.815 18.4796 23.8217 15.233 23.8217 11.9907C23.8217 8.74793 23.8145 5.5073 23.7985 5.30367C23.7239 4.35461 23.5612 3.71644 23.2299 3.04192C22.9581 2.48975 22.6563 2.0774 22.2181 1.65578C21.4362 0.908891 20.4798 0.45436 19.3402 0.290001C18.7881 0.210185 18.6781 0.18655 15.8527 0.181641H12.0055Z"
                      fill="url(#paint1_radial)"
                    />
                    <path
                      d="M12.0012 3.27246C9.63106 3.27246 9.33362 3.28282 8.40274 3.32519C7.47367 3.36773 6.83951 3.51482 6.28462 3.73063C5.71064 3.95353 5.22374 4.2517 4.73867 4.73696C4.25323 5.22204 3.95505 5.70893 3.73142 6.28273C3.51507 6.83781 3.3678 7.47215 3.32598 8.40085C3.28435 9.33173 3.27344 9.62936 3.27344 11.9995C3.27344 14.3696 3.28398 14.6661 3.32616 15.597C3.36889 16.5261 3.51598 17.1602 3.73161 17.7151C3.95469 18.2891 4.25286 18.776 4.73812 19.2611C5.22301 19.7465 5.70991 20.0454 6.28353 20.2683C6.83878 20.4841 7.47313 20.6312 8.40201 20.6738C9.33289 20.7161 9.63015 20.7265 12.0001 20.7265C14.3704 20.7265 14.6669 20.7161 15.5978 20.6738C16.5269 20.6312 17.1617 20.4841 17.717 20.2683C18.2908 20.0454 18.777 19.7465 19.2619 19.2611C19.7473 18.776 20.0455 18.2891 20.2691 17.7153C20.4836 17.1602 20.6309 16.5259 20.6745 15.5972C20.7164 14.6663 20.7273 14.3696 20.7273 11.9995C20.7273 9.62936 20.7164 9.33191 20.6745 8.40103C20.6309 7.47197 20.4836 6.83781 20.2691 6.28291C20.0455 5.70893 19.7473 5.22204 19.2619 4.73696C18.7764 4.25152 18.291 3.95335 17.7165 3.73063C17.1601 3.51482 16.5256 3.36773 15.5965 3.32519C14.6656 3.28282 14.3693 3.27246 11.9984 3.27246H12.0012ZM11.2183 4.84514C11.4506 4.84478 11.7099 4.84514 12.0012 4.84514C14.3313 4.84514 14.6075 4.8535 15.5276 4.89532C16.3785 4.93423 16.8403 5.07641 17.1479 5.19586C17.5552 5.35403 17.8455 5.54312 18.1508 5.84856C18.4563 6.15401 18.6453 6.44491 18.8039 6.85217C18.9233 7.15943 19.0657 7.62124 19.1044 8.47212C19.1462 9.39209 19.1553 9.66845 19.1553 11.9975C19.1553 14.3265 19.1462 14.6028 19.1044 15.5228C19.0655 16.3737 18.9233 16.8355 18.8039 17.1428C18.6457 17.55 18.4563 17.84 18.1508 18.1453C17.8454 18.4507 17.5554 18.6398 17.1479 18.798C16.8407 18.918 16.3785 19.0598 15.5276 19.0987C14.6076 19.1405 14.3313 19.1496 12.0012 19.1496C9.67088 19.1496 9.39471 19.1405 8.47473 19.0987C7.62385 19.0594 7.16205 18.9173 6.85424 18.7978C6.44698 18.6396 6.15608 18.4505 5.85063 18.1451C5.54519 17.8397 5.3561 17.5495 5.19756 17.142C5.07811 16.8348 4.93575 16.373 4.89702 15.5221C4.85521 14.6021 4.84684 14.3258 4.84684 11.9953C4.84684 9.66481 4.85521 9.38991 4.89702 8.46994C4.93593 7.61906 5.07811 7.15725 5.19756 6.84962C5.35574 6.44236 5.54519 6.15146 5.85063 5.84602C6.15608 5.54057 6.44698 5.35149 6.85424 5.19295C7.16187 5.07295 7.62385 4.93114 8.47473 4.89205C9.2798 4.85569 9.59179 4.84478 11.2183 4.84296V4.84514ZM16.6596 6.29419C16.0814 6.29419 15.6123 6.76272 15.6123 7.34106C15.6123 7.91923 16.0814 8.38831 16.6596 8.38831C17.2377 8.38831 17.7068 7.91923 17.7068 7.34106C17.7068 6.7629 17.2377 6.29382 16.6596 6.29382V6.29419ZM12.0012 7.51779C9.52616 7.51779 7.51949 9.52445 7.51949 11.9995C7.51949 14.4745 9.52616 16.4802 12.0012 16.4802C14.4762 16.4802 16.4821 14.4745 16.4821 11.9995C16.4821 9.52445 14.476 7.51779 12.001 7.51779H12.0012ZM12.0012 9.09047C13.6077 9.09047 14.9102 10.3928 14.9102 11.9995C14.9102 13.606 13.6077 14.9085 12.0012 14.9085C10.3945 14.9085 9.09217 13.606 9.09217 11.9995C9.09217 10.3928 10.3945 9.09047 12.0012 9.09047V9.09047Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(6.46107 25.6356) rotate(-90) scale(23.4227 21.7909)"
                    >
                      <stop stopColor="#FFDD55" />
                      <stop offset="0.1" stopColor="#FFDD55" />
                      <stop offset="0.5" stopColor="#FF543E" />
                      <stop offset="1" stopColor="#C837AB" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(-3.7782 1.88417) rotate(78.6776) scale(10.4701 43.1693)"
                    >
                      <stop stopColor="#3771C8" />
                      <stop offset="0.128" stopColor="#3771C8" />
                      <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id="clip0">
                      <rect width="24" height="23.9993" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            {/* Twitter */}
            <li>
              <a className="block w-5 group">
                <svg
                  className="w-full h-auto group-hover:text-[#41ABE1] text-grey-7"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.0003 2.31C23.1157 2.70038 22.1666 2.9654 21.171 3.08359C22.1881 2.47475 22.9688 1.50777 23.3341 0.35814C22.3815 0.924001 21.3285 1.33228 20.2076 1.55433C19.3086 0.598094 18.0301 0 16.6118 0C13.8936 0 11.6874 2.20614 11.6874 4.92443C11.6874 5.31122 11.7304 5.68726 11.8163 6.0454C7.7228 5.84126 4.09485 3.87866 1.66666 0.898932C1.24405 1.62596 1.00051 2.47117 1.00051 3.37368C1.00051 5.08201 1.87079 6.58978 3.19233 7.4708C2.38652 7.44573 1.62726 7.22369 0.961119 6.8548C0.961119 6.87629 0.961119 6.8942 0.961119 6.91569C0.961119 9.3009 2.6587 11.2922 4.9114 11.7434C4.49954 11.8544 4.06261 11.9153 3.61494 11.9153C3.29619 11.9153 2.98819 11.8831 2.68735 11.8258C3.3141 13.7812 5.13345 15.2066 7.28587 15.246C5.59903 16.5676 3.47884 17.3555 1.16884 17.3555C0.771305 17.3555 0.380932 17.3304 -0.00585938 17.2874C2.17163 18.6842 4.76099 19.5007 7.54373 19.5007C16.6011 19.5007 21.5542 11.9977 21.5542 5.49029C21.5542 5.2754 21.5506 5.0641 21.5399 4.8528C22.5032 4.15801 23.3377 3.29131 23.9967 2.30284L24.0003 2.31Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="19.5043" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
