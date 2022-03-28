/** @jsx jsx */
import { jsx } from "theme-ui"

type Props = {
  src: string;
}

const ProjectPicture = ({ src }: Props) => (
  <div sx={{
    position: "relative",
    width: "100%",
  }}>
    <img
      src={src}
      style={{
        width: "100%",
      }}
    />
  </div>

);

export default ProjectPicture;
