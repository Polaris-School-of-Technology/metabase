import React from "react";

import { Stack, type StackProps } from "metabase/ui";

export const PageContainer = React.forwardRef(function PageContainerInner(
  {
    header,
    children,
    ...rest
  }: React.PropsWithChildren<{ header?: React.ReactNode } & StackProps>,
  ref: React.Ref<unknown>,
) {
  return (
    <Stack
      bg="background-light"
      h="100%"
      pb="2rem"
      px="3.5rem"
      gap="xl"
      style={{ overflow: "auto" }}
      ref={ref}
      {...rest}
    >
      {header}
      {children}
    </Stack>
  );
});
