import { Box, Typography } from "@mui/material";

const EmptyBox = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            padding={2}
        >
            <svg
                width="100"
                height="100"
                viewBox="0 0 64 41"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ opacity: 0.8 }}
            >
                <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                    {/* Ellipse bóng dưới thùng */}
                    <ellipse cx="32" cy="33" rx="32" ry="7" fill="#E0E0E0"></ellipse>
                    <g fillRule="nonzero" fill="#D9D9D9">
                        {/* Hình thùng phía trên */}
                        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                        {/* Hình thùng phía dưới */}
                        <path
                            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                            fill="#F5F5F5"
                        ></path>
                    </g>
                </g>
            </svg>
            <Typography variant="h6" color="textSecondary" fontWeight={500}>
                Trống
            </Typography>
        </Box>
    );
};

export default EmptyBox;
