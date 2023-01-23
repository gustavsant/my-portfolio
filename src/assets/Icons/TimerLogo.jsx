export default function TimerLogo({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C15.866 20 19 16.866 19 13C19 11.0824 18.229 9.34498 16.98 8.08071L18.1872 6.87353L17.1265 5.81287L15.8116 7.12778C14.9125 6.54298 13.8708 6.15908 12.7499 6.0397V4.5H15V3H9V4.5H11.2499V6.03971C10.1292 6.1591 9.08749 6.54298 8.18844 7.12773L6.87352 5.81281L5.81286 6.87347L7.02004 8.08065C5.77106 9.34493 5 11.0824 5 13C5 16.866 8.13401 20 12 20ZM12 7.5C8.96243 7.5 6.5 9.96243 6.5 13C6.5 16.0376 8.96243 18.5 12 18.5C15.0376 18.5 17.5 16.0376 17.5 13C17.5 9.96243 15.0376 7.5 12 7.5Z"
        className="dark:fill-nicewhite fill-semiblack"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 12.5V8.99988H11V14H15V12.5H12.5Z"
        className="dark:fill-nicewhite fill-semiblack"
      />
    </svg>
  )
}
