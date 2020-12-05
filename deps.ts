import React from 'https://dev.jspm.io/react@17.0.0';
import ReactDomServer from 'https://dev.jspm.io/react-dom@17.0.0/server';
import ReactDom from 'https://dev.jspm.io/react-dom@17.0.0';
// import {
//   ObsidianWrapper,
//   useObsidian,
// } from 'https://deno.land/x/obsidian@v1.0.1/clientMod.ts';

import rcb from 'https://dev.jspm.io/react-code-blocks';

const realRCB: any = rcb;
const { CodeBlock, CopyBlock, monokai } = realRCB;

monokai.backgroundColor = 'rgba(5, 5, 5, 0.93)';

export {
  React,
  ReactDomServer,
  ReactDom,
  // ObsidianWrapper,
  // useObsidian,
  CodeBlock,
  CopyBlock,
  monokai,
};
