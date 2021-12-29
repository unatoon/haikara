/** @jsx jsx */
import { jsx } from "theme-ui";

import { Avatar, Card, Heading, Paragraph, Text } from "theme-ui";

type ProfileProps = {
    name: string;
    nickname: string;
    icon: string;
    weapons: string[];
};

const Profile = ({ name, nickname, icon, weapons }: ProfileProps) => (
    <div sx={{marginTop: [4, 4, 4, 5]}}>
        <Card>
            <div sx={{
                display: "flex",
                flexDirection: "row",
                gap: [2, 2, 2, 3],
            }}>
                <Avatar
                    src={icon}
                    sx={{
                        width: 24,
                        height: 24,
                    }}
                />
                <div sx={{flexGrow: 1}}>
                    <Heading
                        as="h3"
                        sx={{
                            fontSize: [2, 3, 4],
                            mt: 2,
                            color: "heading",
                        }}
                    >
                        {name}
                    </Heading>
                    <Paragraph sx={{ textAlign: "right" }}>
                        <Text
                            sx={{
                                fontStyle: "italic",
                                fontWeight: "bold",
                                textAlign: "right",
                            }}
                        >
                            ― {nickname}
                        </Text>

                    </Paragraph>

                </div>
            </div>
            <div>
                <p>{weapons.join(" / ")}</p>
            </div>
        </Card>
    </div>
);

export default Profile;