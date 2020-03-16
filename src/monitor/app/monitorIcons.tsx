import React from "react";
import { SvgIcon } from "@material-ui/core";

export function GroupingIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
    </SvgIcon>
  );
}

export function LockIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path d="M0 0h24v24H0V0z" opacity=".87" />
      </g>
      <path
        d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
        opacity=".3"
      />
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </SvgIcon>
  );
}

export function UnlockIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
        opacity=".3"
      />
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </SvgIcon>
  );
}

export function MessageIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3" />
      <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
    </SvgIcon>
  );
}

export function DisconnectIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z"
        opacity=".3"
      />
      <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </SvgIcon>
  );
}

export function SettingsIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        opacity=".3"
      />
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </SvgIcon>
  );
}

export function Speed0Icon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
      <path d="M 11.99,5 V 1 l -5,5 5,5 V 7 c 3.31,0 6,2.69 6,6 0,3.31 -2.69,6 -6,6 -3.31,0 -6,-2.69 -6,-6 h -2 c 0,4.42 3.58,8 8,8 4.42,0 8,-3.58 8,-8 0,-4.42 -3.58,-8 -8,-8 z" />
    </SvgIcon>
  );
}

export function Speed5Icon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.31 8.9l.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z" />
    </SvgIcon>
  );
}

export function Speed10Icon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z" />
    </SvgIcon>
  );
}

export function Speed30Icon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-2.44 8.49h.45c.21 0 .37-.05.48-.16s.16-.25.16-.43c0-.08-.01-.15-.04-.22s-.06-.12-.11-.17-.11-.09-.18-.11-.16-.04-.25-.04c-.08 0-.15.01-.22.03s-.13.05-.18.1-.09.09-.12.15-.05.13-.05.2h-.85c0-.18.04-.34.11-.48s.17-.27.3-.37.27-.18.44-.23.35-.08.54-.08c.21 0 .41.03.59.08s.33.13.46.23.23.23.3.38.11.33.11.53c0 .09-.01.18-.04.27s-.07.17-.13.25-.12.15-.2.22-.17.12-.28.17c.24.09.42.21.54.39s.18.38.18.61c0 .2-.04.38-.12.53s-.18.29-.32.39-.29.19-.48.24-.38.08-.6.08c-.18 0-.36-.02-.53-.07s-.33-.12-.46-.23-.25-.23-.33-.38-.12-.34-.12-.55h.85c0 .08.02.15.05.22s.07.12.13.17.12.09.2.11.16.04.25.04c.1 0 .19-.01.27-.04s.15-.07.2-.12.1-.11.13-.18.04-.15.04-.24c0-.11-.02-.21-.05-.29s-.08-.15-.14-.2-.13-.09-.22-.11-.18-.04-.29-.04h-.47v-.65zm5.74.75c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32c.03-.13.04-.29.04-.48v-.97z" />
    </SvgIcon>
  );
}

export function StopIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8 8h8v8H8z" opacity=".3" />
      <path d="M6 18h12V6H6v12zM8 8h8v8H8V8z" />
    </SvgIcon>
  );
}

export function WriteLogIcon(props: any) {
  return (
    <SvgIcon {...props}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z"
          opacity=".3"
        />
        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </SvgIcon>
  );
}