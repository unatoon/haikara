/** @jsx jsx */
import { jsx } from "theme-ui"

type IframeProps = {
    src: string;
    title: string;
    allow: string;
};

const Iframe = ({src, title, allow}: IframeProps) => (
    <div sx={{
        position: "relative",
        width: "100%",
        padding: "calc(315 / 560 * 100%) 0 0",
    }}>
        <iframe
            src={src}
            title={title}
            allow={allow}
            frameBorder={0}
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
        ></iframe>
    </div>
);

export default Iframe;