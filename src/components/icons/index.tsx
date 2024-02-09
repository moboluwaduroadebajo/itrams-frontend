import React from "react";

interface IconProps {
  name: string;
  height?: number;
  width?: number;
  fill?: string;
  className?: string;
  onClick?: (ars?: any) => void;
}

export const Icons = ({ name, fill, className }: IconProps) => {
  if (name === "loading-indicator") {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white z-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
  }
  if (name === "close-eye") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none">
        <path
          d="M14.4944 11.3334C14.6539 10.907 14.7348 10.4553 14.7332 10C14.7332 8.98925 14.3317 8.01988 13.617 7.30516C12.9023 6.59044 11.9329 6.18891 10.9221 6.18891C10.4725 6.18944 10.0266 6.27034 9.60547 6.4278L10.4999 7.35002C10.6359 7.32827 10.7733 7.31712 10.911 7.31669C11.6257 7.3152 12.312 7.59654 12.8199 8.0993C13.3279 8.60205 13.6163 9.28536 13.6221 10C13.6217 10.1377 13.6105 10.2752 13.5888 10.4111L14.4944 11.3334Z"
          fill="#3A3A3C"
        />
        <path
          d="M19.55 9.73886C17.6778 6.27775 14.3944 4.1833 10.7611 4.1833C9.77184 4.18563 8.78923 4.34502 7.84998 4.65553L8.74442 5.55553C9.40323 5.38526 10.0806 5.29756 10.7611 5.29441C13.8889 5.29441 16.7333 7.03886 18.4278 9.97775C17.8062 11.0681 16.9822 12.0297 16 12.8111L16.7889 13.6C17.9256 12.6829 18.8696 11.5501 19.5666 10.2666L19.7111 9.99997L19.55 9.73886Z"
          fill="#3A3A3C"
        />
        <path
          d="M3.2056 3.21112L5.68338 5.68889C4.11722 6.69729 2.83721 8.0921 1.96671 9.7389L1.82227 10L1.96671 10.2667C3.83893 13.7278 7.12226 15.8222 10.7556 15.8222C12.1737 15.8219 13.5735 15.501 14.85 14.8833L17.6278 17.6611L18.6 16.8278L4.1556 2.38334L3.2056 3.21112ZM8.62227 8.62778L12.3167 12.3222C11.8993 12.5806 11.4187 12.719 10.9278 12.7222C10.5711 12.7222 10.2179 12.6517 9.88859 12.5147C9.55924 12.3777 9.26024 12.1769 9.00879 11.9239C8.75733 11.6709 8.55839 11.3707 8.42341 11.0405C8.28843 10.7103 8.22007 10.3567 8.22227 10C8.22853 9.51476 8.36681 9.04039 8.62227 8.62778ZM7.81671 7.82223C7.29695 8.55523 7.05334 9.4485 7.129 10.3439C7.20466 11.2393 7.59471 12.079 8.2301 12.7144C8.86549 13.3498 9.70522 13.7398 10.6006 13.8155C11.496 13.8912 12.3893 13.6475 13.1223 13.1278L14.0112 14.0167C12.9821 14.4565 11.8747 14.6833 10.7556 14.6833C7.62782 14.6833 4.78338 12.9389 3.08893 10C3.9021 8.56013 5.07322 7.35456 6.48893 6.50001L7.81671 7.82223Z"
          fill="#3A3A3C"
        />
      </svg>
    );
  }
  if (name === "logo") {
    return (
      <svg
        width="123"
        height="23"
        viewBox="0 0 123 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.488281 16.7227C0.488281 16.3307 0.593099 15.998 0.802734 15.7246C1.01237 15.4512 1.29036 15.2689 1.63672 15.1777C1.73698 14.9772 1.89193 14.7083 2.10156 14.3711C2.3112 14.0247 2.57096 13.651 2.88086 13.25C3.19076 12.849 3.54167 12.4479 3.93359 12.0469C4.33464 11.6367 4.77214 11.2676 5.24609 10.9395C5.72917 10.6022 6.24414 10.3288 6.79102 10.1191C7.34701 9.90951 7.9349 9.80469 8.55469 9.80469C9.08333 9.80469 9.54362 9.86849 9.93555 9.99609C10.3275 10.1237 10.651 10.3014 10.9062 10.5293C11.1615 10.7572 11.3529 11.0306 11.4805 11.3496C11.6081 11.6595 11.6719 11.9967 11.6719 12.3613C11.6719 12.6712 11.6309 12.9674 11.5488 13.25C11.4212 13.7604 11.1842 14.207 10.8379 14.5898C10.4915 14.9727 10.0814 15.3099 9.60742 15.6016C9.14258 15.8841 8.63216 16.1211 8.07617 16.3125C7.5293 16.5039 6.97786 16.6634 6.42188 16.791C5.875 16.9186 5.34635 17.0189 4.83594 17.0918C4.32552 17.1556 3.88346 17.2057 3.50977 17.2422C3.42773 17.4062 3.35482 17.6159 3.29102 17.8711C3.23633 18.1172 3.20898 18.3587 3.20898 18.5957C3.20898 19.1243 3.41862 19.5345 3.83789 19.8262C4.25716 20.1178 4.83594 20.2637 5.57422 20.2637C6.0026 20.2637 6.41276 20.2181 6.80469 20.127C7.19661 20.0267 7.56576 19.9036 7.91211 19.7578C8.26758 19.6029 8.60026 19.4388 8.91016 19.2656C9.22005 19.0833 9.5026 18.9056 9.75781 18.7324C10.0859 18.5137 10.3958 18.3314 10.6875 18.1855C10.9883 18.0306 11.2526 17.9531 11.4805 17.9531C11.7083 17.9531 11.8542 18.0124 11.918 18.1309C11.9818 18.2402 12.0137 18.3587 12.0137 18.4863C12.0137 18.5592 12.0091 18.6322 12 18.7051C12 18.7689 11.9954 18.8236 11.9863 18.8691C11.9408 19.1061 11.8496 19.3431 11.7129 19.5801C11.5762 19.8171 11.403 20.0221 11.1934 20.1953C10.2454 20.9427 9.27018 21.4759 8.26758 21.7949C7.27409 22.1139 6.21224 22.2734 5.08203 22.2734C4.86328 22.2734 4.60352 22.2598 4.30273 22.2324C4.01107 22.2051 3.70573 22.1504 3.38672 22.0684C3.06771 21.9863 2.75326 21.8678 2.44336 21.7129C2.13346 21.5579 1.85547 21.3529 1.60938 21.0977C1.3724 20.8424 1.17643 20.528 1.02148 20.1543C0.875651 19.7806 0.802734 19.3294 0.802734 18.8008C0.802734 18.3724 0.861979 17.8939 0.980469 17.3652C0.861979 17.347 0.748047 17.2878 0.638672 17.1875C0.538411 17.0781 0.488281 16.9232 0.488281 16.7227ZM9.04688 12.9355C9.0651 12.89 9.07422 12.849 9.07422 12.8125C9.07422 12.776 9.07422 12.735 9.07422 12.6895C9.07422 12.4434 8.98307 12.2611 8.80078 12.1426C8.61849 12.015 8.39974 11.9512 8.14453 11.9512C7.74349 11.9512 7.34701 12.056 6.95508 12.2656C6.57227 12.4753 6.20768 12.7396 5.86133 13.0586C5.52409 13.3685 5.22331 13.7057 4.95898 14.0703C4.69466 14.4258 4.48958 14.7493 4.34375 15.041C5 14.9863 5.60156 14.8997 6.14844 14.7812C6.69531 14.6536 7.16927 14.4987 7.57031 14.3164C7.98047 14.125 8.30859 13.9154 8.55469 13.6875C8.8099 13.4505 8.97396 13.1999 9.04688 12.9355ZM23.1732 10.5977C23.793 10.5977 24.1029 10.9349 24.1029 11.6094C24.1029 12.1016 23.9935 12.4935 23.7748 12.7852C23.5651 13.0677 23.2735 13.209 22.8998 13.209C20.8034 13.209 18.9167 13.3001 17.2396 13.4824C16.4649 13.5827 15.8496 13.6328 15.3939 13.6328C14.7923 13.6328 14.4916 13.1908 14.4916 12.3066C14.4916 12.015 14.6101 11.7507 14.847 11.5137C15.084 11.2676 15.3757 11.1081 15.722 11.0352C16.0775 10.9531 17.1074 10.862 18.8119 10.7617C20.5254 10.6523 21.9792 10.5977 23.1732 10.5977ZM29.6843 14.1523C29.7663 13.7969 29.862 13.4049 29.9714 12.9766C30.0899 12.5391 30.2129 12.0879 30.3405 11.623C30.4773 11.1582 30.614 10.6888 30.7507 10.2148C30.8874 9.74089 31.0196 9.28516 31.1472 8.84766C31.2839 8.41016 31.407 8.00456 31.5163 7.63086C31.6257 7.24805 31.7214 6.92448 31.8034 6.66016C31.9766 6.06771 32.1407 5.47526 32.2956 4.88281C32.4506 4.28125 32.601 3.65234 32.7468 2.99609C32.9291 2.64062 33.1752 2.38997 33.4851 2.24414C33.795 2.08919 34.1322 2.01172 34.4968 2.01172C34.7885 2.16667 35.0163 2.38086 35.1804 2.6543C35.3536 2.91862 35.4402 3.2194 35.4402 3.55664C35.4402 3.79362 35.3991 4.06706 35.3171 4.37695C35.2442 4.67773 35.1485 5.00586 35.03 5.36133C34.9115 5.70768 34.7793 6.07682 34.6335 6.46875C34.4877 6.85156 34.3464 7.24805 34.2097 7.6582C33.9545 8.4056 33.6993 9.15299 33.4441 9.90039C33.1889 10.6478 32.9382 11.4362 32.6921 12.2656C32.6283 12.4844 32.5599 12.7031 32.487 12.9219C32.4141 13.1406 32.3366 13.3776 32.2546 13.6328C32.1817 13.888 32.0997 14.1751 32.0085 14.4941C31.9174 14.804 31.8262 15.1641 31.7351 15.5742C31.6257 16.0573 31.53 16.5449 31.448 17.0371C31.3659 17.5202 31.2885 18.0078 31.2155 18.5C31.1426 18.9922 31.0606 19.4889 30.9695 19.9902C30.8783 20.4915 30.7689 20.9974 30.6413 21.5078C30.5958 21.6901 30.5137 21.8542 30.3952 22C30.2859 22.1367 30.1583 22.2552 30.0124 22.3555C29.8666 22.4557 29.7116 22.5332 29.5476 22.5879C29.3835 22.6426 29.2286 22.6699 29.0827 22.6699C28.9369 22.6699 28.7956 22.6562 28.6589 22.6289C28.5313 22.6107 28.431 22.5605 28.3581 22.4785C28.2488 22.36 28.1622 22.2279 28.0984 22.082C28.0346 21.9362 28.0027 21.7812 28.0027 21.6172C28.0027 21.5716 28.0027 21.5306 28.0027 21.4941C28.0118 21.4486 28.0209 21.403 28.03 21.3574L29.6843 14.1523ZM42.1427 19.7988C42.489 18.2858 42.8764 16.7591 43.3048 15.2188C43.7423 13.6784 44.1661 12.1517 44.5762 10.6387C44.7494 10.0098 44.8998 9.4401 45.0274 8.92969C45.1641 8.41016 45.2781 7.94076 45.3692 7.52148C45.4604 7.10221 45.5287 6.72396 45.5743 6.38672C45.6199 6.04036 45.6427 5.72135 45.6427 5.42969C45.6427 5.375 45.6427 5.31576 45.6427 5.25195C45.6427 5.17904 45.6381 5.09245 45.629 4.99219C45.5378 4.99219 45.3328 5.04232 45.0137 5.14258C44.7039 5.24284 44.3347 5.375 43.9063 5.53906C43.4871 5.70312 43.0404 5.88997 42.5665 6.09961C42.1016 6.30013 41.6687 6.50521 41.2677 6.71484C40.9486 6.87891 40.6798 7.01562 40.461 7.125C40.2514 7.23438 40.0691 7.32096 39.9141 7.38477C39.7592 7.43945 39.6179 7.48047 39.4903 7.50781C39.3627 7.52604 39.2305 7.53516 39.0938 7.53516C38.8113 7.53516 38.5652 7.42578 38.3555 7.20703C38.155 6.98828 38.0548 6.70573 38.0548 6.35938C38.0548 6.15885 38.073 5.98568 38.1095 5.83984C38.155 5.6849 38.2188 5.54818 38.3009 5.42969C38.392 5.3112 38.5105 5.20182 38.6563 5.10156C38.8022 4.99219 38.9799 4.88281 39.1895 4.77344C41.4955 3.57031 43.8289 2.69076 46.1895 2.13477C48.5502 1.56966 50.92 1.28711 53.2989 1.28711C53.4903 1.28711 53.7182 1.29167 53.9825 1.30078C54.2468 1.3099 54.5157 1.32812 54.7891 1.35547C55.0717 1.3737 55.3451 1.4056 55.6095 1.45117C55.8738 1.48763 56.1062 1.5332 56.3067 1.58789C56.5164 1.65169 56.6986 1.78385 56.8536 1.98438C57.0085 2.1849 57.086 2.39909 57.086 2.62695C57.086 2.80924 57.0678 2.98698 57.0313 3.16016C57.004 3.33333 56.9493 3.48372 56.8673 3.61133C56.7852 3.73893 56.6759 3.84375 56.5391 3.92578C56.4115 3.9987 56.252 4.03516 56.0606 4.03516C55.7325 3.9987 55.3542 3.95312 54.9259 3.89844C54.5066 3.84375 54.0828 3.81641 53.6544 3.81641C52.7976 3.81641 51.9408 3.83919 51.0841 3.88477C50.2364 3.92122 49.366 4.03971 48.4727 4.24023C48.4272 4.25846 48.3953 4.30859 48.377 4.39062C48.3679 4.46354 48.3588 4.55924 48.3497 4.67773C48.3223 5.16992 48.2813 5.60286 48.2266 5.97656C48.172 6.35026 48.0945 6.72396 47.9942 7.09766C47.9031 7.47135 47.7891 7.87695 47.6524 8.31445C47.5157 8.74284 47.3562 9.26237 47.1739 9.87305C46.9916 10.4746 46.7774 11.1992 46.5313 12.0469C46.2943 12.8854 46.03 13.9017 45.7384 15.0957L45.0821 17.748C44.9272 18.3587 44.8041 18.9102 44.713 19.4023C44.6309 19.8854 44.558 20.3639 44.4942 20.8379C44.4578 20.9928 44.3165 21.1387 44.0704 21.2754C43.8334 21.4121 43.5509 21.4805 43.2227 21.4805C43.0313 21.4805 42.8581 21.4303 42.7032 21.3301C42.5483 21.2207 42.4206 21.084 42.3204 20.9199C42.2201 20.7559 42.1518 20.5781 42.1153 20.3867C42.0789 20.1862 42.088 19.9902 42.1427 19.7988ZM54.3959 20.5918C54.5144 19.9538 54.6511 19.252 54.8061 18.4863C54.961 17.7207 55.1205 16.946 55.2846 16.1621C55.4487 15.3783 55.6082 14.6081 55.7631 13.8516C55.9181 13.0951 56.0502 12.4023 56.1596 11.7734C56.1505 11.6823 56.1459 11.6048 56.1459 11.541C56.1459 11.4681 56.1459 11.3906 56.1459 11.3086C56.1459 11.026 56.1642 10.7435 56.2006 10.4609C56.2371 10.1784 56.2872 9.91862 56.351 9.68164C56.4513 9.33529 56.5607 9.10286 56.6791 8.98438C56.8067 8.85677 57.0073 8.79297 57.2807 8.79297C57.545 8.79297 57.7547 8.84766 57.9096 8.95703C58.0737 9.05729 58.2013 9.19401 58.2924 9.36719C58.3836 9.54036 58.4428 9.74089 58.4702 9.96875C58.4975 10.1875 58.5112 10.4154 58.5112 10.6523C58.5112 10.7799 58.5066 10.9212 58.4975 11.0762C58.4884 11.2311 58.4838 11.3542 58.4838 11.4453C58.739 11.181 59.0079 10.9121 59.2905 10.6387C59.5821 10.3561 59.8875 10.1055 60.2065 9.88672C60.5346 9.65885 60.8764 9.47201 61.2319 9.32617C61.5965 9.18034 61.9747 9.10742 62.3666 9.10742C62.5216 9.10742 62.672 9.12109 62.8178 9.14844C62.9728 9.17578 63.1277 9.21224 63.2827 9.25781C63.4649 9.30339 63.6518 9.36719 63.8432 9.44922C64.0437 9.52214 64.2351 9.62695 64.4174 9.76367C64.7182 9.99154 64.9689 10.2786 65.1694 10.625C65.379 10.9622 65.4838 11.3086 65.4838 11.6641C65.4838 11.8008 65.4565 11.9512 65.4018 12.1152C65.3471 12.2702 65.2696 12.416 65.1694 12.5527C65.0782 12.6803 64.9689 12.7897 64.8413 12.8809C64.7136 12.9629 64.5724 13.0039 64.4174 13.0039C64.2625 13.0039 64.0711 12.9674 63.8432 12.8945C63.6245 12.8125 63.4422 12.7077 63.2963 12.5801C63.2325 12.5254 63.1642 12.4479 63.0913 12.3477C63.0274 12.2474 62.9636 12.1471 62.8998 12.0469C62.8452 11.9466 62.7905 11.8555 62.7358 11.7734C62.6902 11.6823 62.6538 11.623 62.6264 11.5957C62.5808 11.5866 62.5307 11.582 62.476 11.582C62.4213 11.5729 62.3712 11.5684 62.3256 11.5684C61.8608 11.5684 61.4187 11.6868 60.9995 11.9238C60.5802 12.1608 60.1883 12.4525 59.8237 12.7988C59.4591 13.1361 59.1219 13.5007 58.812 13.8926C58.5112 14.2754 58.2469 14.6217 58.019 14.9316C57.8367 15.6699 57.6316 16.4583 57.4038 17.2969C57.185 18.1263 56.9663 18.9967 56.7475 19.9082V20.25C56.7475 20.5234 56.7384 20.8014 56.7202 21.084C56.7019 21.3665 56.6472 21.6172 56.5561 21.8359C56.4558 21.9727 56.31 22.0866 56.1186 22.1777C55.9363 22.278 55.7221 22.3281 55.476 22.3281C55.0932 22.3281 54.8061 22.2051 54.6147 21.959C54.4233 21.7038 54.3276 21.4076 54.3276 21.0703C54.3276 20.9154 54.3504 20.7559 54.3959 20.5918ZM72.8289 21.4121C72.8289 21.1478 72.8608 20.8333 72.9246 20.4688C72.9884 20.0951 73.0203 19.6348 73.0203 19.0879C72.7195 19.3066 72.3868 19.5664 72.0223 19.8672C71.6577 20.168 71.2794 20.4551 70.8875 20.7285C70.4956 21.002 70.1036 21.2344 69.7117 21.4258C69.3289 21.6081 68.9689 21.6992 68.6316 21.6992C68.3582 21.6992 68.0984 21.6582 67.8523 21.5762C67.6062 21.4941 67.3966 21.3848 67.2234 21.248C66.7404 20.8652 66.3895 20.4824 66.1707 20.0996C65.9611 19.7168 65.8562 19.2702 65.8562 18.7598C65.8562 18.5319 65.8745 18.2949 65.9109 18.0488C65.9565 17.8027 66.0203 17.5202 66.1023 17.2012C66.4487 15.7611 67.0411 14.4303 67.8797 13.209C68.7273 11.9785 69.7755 10.9303 71.0242 10.0645C71.5073 9.72721 71.9904 9.51302 72.4734 9.42188C72.9565 9.32161 73.435 9.27148 73.909 9.27148C74.1186 9.27148 74.351 9.28516 74.6062 9.3125C74.8706 9.33984 75.1075 9.36719 75.3172 9.39453C75.5268 9.34896 75.6954 9.31706 75.823 9.29883C75.9598 9.2806 76.101 9.27148 76.2469 9.27148C76.5203 9.27148 76.7482 9.30794 76.9305 9.38086C77.1128 9.45378 77.2586 9.55404 77.368 9.68164C77.4773 9.80013 77.5548 9.94141 77.6004 10.1055C77.6551 10.2604 77.6824 10.4245 77.6824 10.5977C77.6824 10.8346 77.646 11.0625 77.573 11.2812C77.5001 11.4909 77.4272 11.7051 77.3543 11.9238L75.5496 19.1289C75.5131 19.5208 75.4812 19.8809 75.4539 20.209C75.4266 20.5371 75.3719 20.8424 75.2898 21.125C75.2625 21.207 75.226 21.3118 75.1805 21.4395C75.144 21.5579 75.0802 21.6764 74.9891 21.7949C74.8979 21.9043 74.784 22 74.6473 22.082C74.5105 22.1641 74.3328 22.2051 74.1141 22.2051C73.8315 22.2051 73.6036 22.1868 73.4305 22.1504C73.2664 22.1139 73.1388 22.0638 73.0477 22C72.9565 21.9271 72.8973 21.8451 72.8699 21.7539C72.8426 21.6536 72.8289 21.5397 72.8289 21.4121ZM68.2898 17.2832C68.2534 17.4108 68.2124 17.5931 68.1668 17.8301C68.1303 18.0671 68.1121 18.304 68.1121 18.541C68.1121 18.7871 68.1486 19.0104 68.2215 19.2109C68.2944 19.4023 68.4539 19.498 68.7 19.498C69.0828 19.498 69.4383 19.416 69.7664 19.252C70.1036 19.0788 70.4181 18.8737 70.7098 18.6367C71.1017 18.3177 71.4982 17.9622 71.8992 17.5703C72.3094 17.1693 72.6922 16.75 73.0477 16.3125C73.4122 15.875 73.7312 15.4284 74.0047 14.9727C74.2872 14.5078 74.4923 14.0475 74.6199 13.5918C74.6928 13.3275 74.7521 13.0221 74.7977 12.6758C74.8523 12.3294 74.8797 12.0195 74.8797 11.7461C74.8797 11.6276 74.8523 11.5137 74.7977 11.4043C74.743 11.2858 74.6381 11.2266 74.4832 11.2266C74.0366 11.2266 73.5854 11.3132 73.1297 11.4863C72.6831 11.6595 72.2501 11.8919 71.8309 12.1836C71.4116 12.4753 71.0105 12.8216 70.6277 13.2227C70.254 13.6146 69.9122 14.0384 69.6023 14.4941C69.2924 14.9408 69.0236 15.4056 68.7957 15.8887C68.577 16.3626 68.4083 16.8275 68.2898 17.2832ZM79.258 20.7969C79.4311 20.1042 79.6727 19.334 79.9826 18.4863C80.2925 17.6387 80.6479 16.7546 81.049 15.834C81.4591 14.9134 81.9058 13.9792 82.3888 13.0312C82.881 12.0833 83.3869 11.1628 83.9064 10.2695C84.435 9.36719 84.9728 8.51953 85.5197 7.72656C86.0757 6.92448 86.6225 6.20898 87.1603 5.58008C87.3153 5.4069 87.5067 5.19271 87.7345 4.9375C87.9715 4.68229 88.2313 4.41797 88.5138 4.14453C88.8055 3.87109 89.1063 3.60221 89.4162 3.33789C89.7352 3.06445 90.0542 2.82292 90.3732 2.61328C90.6922 2.39453 91.0021 2.22135 91.3029 2.09375C91.6037 1.95703 91.8817 1.88867 92.1369 1.88867C92.4832 1.88867 92.7977 1.94792 93.0802 2.06641C93.3719 2.1849 93.618 2.35352 93.8185 2.57227C94.0281 2.79102 94.1877 3.05534 94.297 3.36523C94.4155 3.66602 94.4748 3.9987 94.4748 4.36328C94.4748 4.51823 94.4611 4.67318 94.4337 4.82812C94.4155 4.98307 94.3882 5.14258 94.3517 5.30664L92.8341 12.9355C92.9709 12.7259 93.1623 12.4434 93.4084 12.0879C93.6544 11.7233 93.9324 11.3223 94.2423 10.8848C94.5522 10.4382 94.8758 9.97786 95.213 9.50391C95.5503 9.02083 95.8784 8.55599 96.1974 8.10938C96.5255 7.66276 96.8263 7.25716 97.0998 6.89258C97.3732 6.51888 97.5965 6.2181 97.7697 5.99023L98.0158 5.67578C98.1798 5.46615 98.3804 5.22005 98.6173 4.9375C98.8543 4.65495 99.1141 4.35872 99.3966 4.04883C99.6883 3.73893 99.9936 3.43359 100.313 3.13281C100.632 2.83203 100.955 2.56315 101.283 2.32617C101.611 2.08919 101.935 1.89779 102.254 1.75195C102.573 1.59701 102.878 1.51953 103.17 1.51953C103.389 1.51953 103.571 1.56966 103.717 1.66992C103.863 1.77018 103.981 1.9069 104.072 2.08008C104.164 2.24414 104.227 2.4401 104.264 2.66797C104.3 2.89583 104.319 3.13281 104.319 3.37891C104.319 3.76172 104.287 4.14909 104.223 4.54102C104.159 4.93294 104.086 5.28841 104.004 5.60742C103.958 5.86263 103.895 6.22721 103.813 6.70117C103.74 7.17513 103.649 7.72201 103.539 8.3418C103.439 8.95247 103.33 9.61784 103.211 10.3379C103.093 11.0488 102.97 11.7734 102.842 12.5117C102.723 13.25 102.6 13.9792 102.473 14.6992C102.354 15.4193 102.24 16.0938 102.131 16.7227C102.031 17.3424 101.935 17.8984 101.844 18.3906C101.762 18.8828 101.694 19.2656 101.639 19.5391C101.611 19.6667 101.566 19.8398 101.502 20.0586C101.447 20.2773 101.361 20.4915 101.242 20.7012C101.133 20.9108 100.983 21.0931 100.791 21.248C100.609 21.403 100.381 21.4805 100.108 21.4805C99.9617 21.4805 99.8205 21.4349 99.6837 21.3438C99.5561 21.2435 99.4377 21.1204 99.3283 20.9746C99.228 20.8288 99.146 20.6738 99.0822 20.5098C99.0275 20.3366 98.9956 20.1816 98.9865 20.0449L101.83 6.53711C101.858 6.40951 101.88 6.29557 101.899 6.19531C101.917 6.09505 101.926 5.99935 101.926 5.9082C101.926 5.80794 101.912 5.7168 101.885 5.63477C101.867 5.55273 101.848 5.47526 101.83 5.40234C101.803 5.32031 101.776 5.2474 101.748 5.18359C101.338 5.49349 100.896 5.88997 100.422 6.37305C99.9572 6.84701 99.4832 7.38021 99.0002 7.97266C98.5262 8.55599 98.0477 9.18034 97.5646 9.8457C97.0906 10.502 96.6395 11.1628 96.2111 11.8281C95.8739 12.3477 95.5093 12.8945 95.1173 13.4688C94.7345 14.043 94.3472 14.6217 93.9552 15.2051C93.5633 15.7793 93.1805 16.3581 92.8068 16.9414C92.4422 17.5156 92.1095 18.0671 91.8087 18.5957C91.6629 18.8509 91.5125 19.179 91.3576 19.5801C91.2026 19.9811 91.0294 20.373 90.838 20.7559C90.6558 21.1387 90.4552 21.4668 90.2365 21.7402C90.0268 22.0137 89.7853 22.1504 89.5119 22.1504C89.3022 22.1504 89.1245 22.1185 88.9787 22.0547C88.8419 21.9909 88.7326 21.9089 88.6505 21.8086C88.5685 21.6992 88.5093 21.5762 88.4728 21.4395C88.4364 21.2936 88.4181 21.1387 88.4181 20.9746C88.4181 20.765 88.4364 20.5553 88.4728 20.3457C88.5184 20.1361 88.564 19.9355 88.6095 19.7441C88.8009 18.9421 89.0015 18.1445 89.2111 17.3516C89.4207 16.5586 89.6349 15.7474 89.8537 14.918C90.0815 14.0885 90.314 13.2318 90.5509 12.3477C90.7879 11.4544 91.0294 10.5065 91.2755 9.50391C91.3393 9.22135 91.4123 8.9069 91.4943 8.56055C91.5763 8.20508 91.6538 7.84961 91.7267 7.49414C91.7996 7.12956 91.8589 6.77865 91.9044 6.44141C91.95 6.10417 91.9728 5.80339 91.9728 5.53906C91.9728 5.30208 91.9546 5.11523 91.9181 4.97852C91.8817 4.83268 91.8133 4.75977 91.713 4.75977C91.3758 4.75977 91.0203 4.88737 90.6466 5.14258C90.2729 5.38867 89.8947 5.7168 89.5119 6.12695C89.1291 6.53711 88.7508 7.00651 88.3771 7.53516C88.0034 8.0638 87.6479 8.61068 87.3107 9.17578C86.9735 9.73177 86.659 10.2832 86.3673 10.8301C86.0757 11.377 85.825 11.8691 85.6154 12.3066C85.5698 12.3978 85.5015 12.5254 85.4103 12.6895C85.3283 12.8444 85.2143 13.0677 85.0685 13.3594C84.9318 13.6419 84.7586 14.0065 84.549 14.4531C84.3485 14.8997 84.1069 15.4648 83.8244 16.1484C83.5509 16.832 83.2319 17.6478 82.8673 18.5957C82.5028 19.5436 82.0926 20.6556 81.6369 21.9316C81.5548 22.1504 81.409 22.3281 81.1994 22.4648C80.9989 22.6016 80.7892 22.6699 80.5705 22.6699C80.0965 22.6699 79.7456 22.5423 79.5177 22.2871C79.299 22.0319 79.1896 21.7174 79.1896 21.3438C79.1896 21.1797 79.2124 20.9974 79.258 20.7969ZM106.099 18.8418C106.409 18.9512 106.723 19.0788 107.043 19.2246C107.371 19.3704 107.708 19.5117 108.054 19.6484C108.401 19.776 108.761 19.8854 109.134 19.9766C109.517 20.0677 109.923 20.1133 110.351 20.1133C110.852 20.1133 111.358 20.054 111.869 19.9355C112.379 19.8171 112.876 19.6439 113.359 19.416C113.851 19.179 114.32 18.8965 114.767 18.5684C115.214 18.2311 115.624 17.8438 115.998 17.4062C116.408 16.9414 116.75 16.5221 117.023 16.1484C117.296 15.7656 117.515 15.4284 117.679 15.1367C117.852 14.8359 117.975 14.5807 118.048 14.3711C118.121 14.1523 118.158 13.9655 118.158 13.8105C118.158 13.5827 118.08 13.3867 117.925 13.2227C117.77 13.0495 117.561 12.9082 117.296 12.7988C117.041 12.6895 116.75 12.612 116.421 12.5664C116.093 12.5117 115.751 12.4844 115.396 12.4844C115.186 12.4844 114.94 12.4935 114.658 12.5117C114.375 12.5208 114.088 12.5345 113.796 12.5527C113.505 12.5618 113.222 12.571 112.949 12.5801C112.675 12.5892 112.438 12.5938 112.238 12.5938C111.937 12.5938 111.623 12.5618 111.294 12.498C110.975 12.4251 110.661 12.3112 110.351 12.1562C110.041 12.0013 109.754 11.7917 109.49 11.5273C109.225 11.263 109.007 10.9349 108.834 10.543C108.779 10.4154 108.729 10.265 108.683 10.0918C108.638 9.91862 108.615 9.73177 108.615 9.53125C108.615 9.3125 108.628 9.10742 108.656 8.91602C108.692 8.71549 108.733 8.52409 108.779 8.3418C108.906 7.88607 109.116 7.42578 109.408 6.96094C109.709 6.48698 110.064 6.02669 110.474 5.58008C110.893 5.13346 111.345 4.70052 111.828 4.28125C112.32 3.86198 112.821 3.47005 113.332 3.10547C113.851 2.73177 114.357 2.39909 114.849 2.10742C115.35 1.80664 115.815 1.55143 116.244 1.3418C116.845 1.05013 117.456 0.840495 118.076 0.712891C118.705 0.576172 119.324 0.507812 119.935 0.507812C120.3 0.507812 120.646 0.557943 120.974 0.658203C121.302 0.749349 121.589 0.886068 121.835 1.06836C122.091 1.25065 122.291 1.47852 122.437 1.75195C122.583 2.01628 122.656 2.32161 122.656 2.66797C122.656 2.86849 122.633 3.03711 122.587 3.17383C122.542 3.31055 122.483 3.42448 122.41 3.51562C122.337 3.59766 122.255 3.6569 122.164 3.69336C122.082 3.72982 121.995 3.74805 121.904 3.74805C121.658 3.74805 121.43 3.7207 121.22 3.66602C121.02 3.61133 120.824 3.55208 120.632 3.48828C120.441 3.41536 120.25 3.35156 120.058 3.29688C119.867 3.23307 119.657 3.20117 119.429 3.20117C118.755 3.20117 118.067 3.33789 117.365 3.61133C116.672 3.87565 115.993 4.21745 115.328 4.63672C114.671 5.04688 114.047 5.50716 113.455 6.01758C112.871 6.52799 112.347 7.02474 111.882 7.50781C111.636 7.76302 111.454 8.01823 111.335 8.27344C111.226 8.52865 111.171 8.77018 111.171 8.99805C111.171 9.33529 111.317 9.59961 111.609 9.79102C111.901 9.98242 112.256 10.0781 112.675 10.0781C112.921 10.0781 113.199 10.0736 113.509 10.0645C113.819 10.0553 114.134 10.0462 114.453 10.0371C114.781 10.0189 115.095 10.0052 115.396 9.99609C115.706 9.97786 115.979 9.96875 116.216 9.96875C116.781 9.96875 117.324 10.0508 117.843 10.2148C118.363 10.3698 118.823 10.6022 119.224 10.9121C119.625 11.222 119.944 11.6094 120.181 12.0742C120.427 12.5299 120.55 13.054 120.55 13.6465C120.55 14.0111 120.496 14.3802 120.386 14.7539C120.277 15.1276 120.126 15.5059 119.935 15.8887C119.744 16.2624 119.525 16.6361 119.279 17.0098C119.033 17.3743 118.773 17.7344 118.5 18.0898C118.007 18.7279 117.456 19.3294 116.845 19.8945C116.244 20.4596 115.601 20.9518 114.918 21.3711C114.234 21.7904 113.509 22.123 112.744 22.3691C111.987 22.6152 111.208 22.7383 110.406 22.7383C110.059 22.7383 109.704 22.7064 109.339 22.6426C108.975 22.5788 108.615 22.4831 108.259 22.3555C107.904 22.237 107.567 22.0866 107.248 21.9043C106.938 21.7129 106.664 21.4987 106.427 21.2617C106.19 21.0247 105.999 20.765 105.853 20.4824C105.716 20.1908 105.648 19.8763 105.648 19.5391C105.648 19.375 105.671 19.2201 105.716 19.0742C105.771 18.9193 105.899 18.8418 106.099 18.8418Z"
          fill="black"
        />
      </svg>
    );
  }
  if (name === "home") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path
          d="M9.02 2.84001L3.63 7.04001C2.73 7.74001 2 9.23001 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29001 21.19 7.74001 20.2 7.05001L14.02 2.72001C12.62 1.74001 10.37 1.79001 9.02 2.84001Z"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.99V14.99"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  if (name === "book") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 5.48999V20.49"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.75 8.48999H5.5"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.5 11.49H5.5"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  if (name === "teacher") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0495 2.53001L4.02953 6.46001C2.09953 7.72001 2.09953 10.54 4.02953 11.8L10.0495 15.73C11.1295 16.44 12.9095 16.44 13.9895 15.73L19.9795 11.8C21.8995 10.54 21.8995 7.73001 19.9795 6.47001L13.9895 2.54001C12.9095 1.82001 11.1295 1.82001 10.0495 2.53001Z"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.62914 13.08L5.61914 17.77C5.61914 19.04 6.59914 20.4 7.79914 20.8L10.9891 21.86C11.5391 22.04 12.4491 22.04 13.0091 21.86L16.1991 20.8C17.3991 20.4 18.3791 19.04 18.3791 17.77V13.13"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.4004 15V9"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  if (name === "case") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z"
          stroke={fill || "black"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.61914 11.27C4.86914 12.81 7.40914 13.74 9.99914 14.03"
          stroke={fill || "#292D32"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  if (name === "arrow-down") {
    return (
      <svg
        width={14}
        height={8}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.276 3.902L8.77.406l1 .999-4.495 4.494L.78 1.405 1.78.406l3.496 3.496z"
          fill="#393854"
        />
      </svg>
    );
  }
  if (name === "arrow-right") {
    return (
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
          fill="white"
        />
      </svg>
    );
  }
  return <div />;
};
