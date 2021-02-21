import React from "react";
import { tw } from "twind";

interface FooterProps {
  isLogin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isLogin }) => {
  return (
    <div className={tw`justify-around flex text-center`}>
      <a
        href="https://github.com/benawad/dogehouse#investors"
        style={{ color: "var(--vscode-textLink-foreground)" }}
      >
        Investors
      </a>
      {isLogin ? (
        <a
          href="https://www.youtube.com/watch?v=hy-EhJ_tTQo"
          style={{ color: "var(--vscode-textLink-foreground)" }}
        >
          Origin Story
        </a>
      ) : null}
      <a
        href="https://discord.gg/wCbKBZF9cV"
        style={{ color: "var(--vscode-textLink-foreground)" }}
      >
        Discord
      </a>
      <a
        style={{ color: "var(--vscode-textLink-foreground)" }}
        href="https://github.com/benawad/dogehouse/issues"
      >
        Report a Bug
      </a>
      <a
        style={{ color: "var(--vscode-textLink-foreground)" }}
        href="https://github.com/benawad/dogehouse/blob/prod/CHANGELOG.md"
        target="_blank"
        rel="noreferrer"
      >
        What's new?
      </a>
    </div>
  );
};
