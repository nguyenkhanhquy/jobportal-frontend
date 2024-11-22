import PropTypes from "prop-types";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Stack,
    CircularProgress,
    Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import EmptyBox from "../../box/EmptyBox";

const JobPostListingTable = ({
    loading,
    jobPosts,
    currentPage,
    recordsPerPage,
    handleViewDetails,
    handleToggleVisibility,
}) => {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 2 }}>
            <Table>
                {/* Tiêu đề bảng */}
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: "#f5f5f5",
                            "& th": {
                                fontWeight: "bold",
                                fontSize: "0.875rem",
                                padding: "12px 16px",
                                borderBottom: "1px solid #ddd",
                            },
                        }}
                    >
                        <TableCell align="center" sx={{ width: "5%" }}>
                            STT
                        </TableCell>
                        <TableCell sx={{ width: "30%" }}>Tiêu đề</TableCell>
                        <TableCell sx={{ width: "20%" }}>Công ty</TableCell>
                        <TableCell sx={{ width: "20%" }}>Vị trí công việc</TableCell>
                        <TableCell sx={{ width: "15%" }}>Ngày đăng</TableCell>
                        <TableCell sx={{ width: "10%" }} align="center">
                            <SettingsIcon />
                        </TableCell>
                    </TableRow>
                </TableHead>

                {/* Nội dung bảng */}
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="100%"
                                    padding={2}
                                >
                                    <CircularProgress color="success" />
                                </Box>
                            </TableCell>
                        </TableRow>
                    ) : (
                        <>
                            {jobPosts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                        <EmptyBox />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                jobPosts.map((post, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: "#f9f9f9",
                                            },
                                            "& td": {
                                                padding: "10px 16px",
                                                fontSize: "0.875rem",
                                                borderBottom: "1px solid #e0e0e0",
                                            },
                                        }}
                                    >
                                        <TableCell align="center">
                                            {index + 1 + (currentPage - 1) * recordsPerPage}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {post.title}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {post.company.name}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {post.jobPosition}
                                        </TableCell>
                                        <TableCell>{new Date(post.createdDate).toLocaleDateString()}</TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={1}>
                                                <Tooltip title="Xem chi tiết">
                                                    <IconButton color="primary" onClick={() => handleViewDetails(post)}>
                                                        <InfoOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title={post.hidden ? "Hiện bài đăng" : "Ẩn bài đăng"}>
                                                    <IconButton
                                                        color="primary"
                                                        onClick={() => handleToggleVisibility(post.id, !post.hidden)}
                                                    >
                                                        {post.hidden ? (
                                                            <VisibilityOffIcon className="text-black" />
                                                        ) : (
                                                            <VisibilityIcon className="text-black" />
                                                        )}
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

JobPostListingTable.propTypes = {
    loading: PropTypes.bool,
    jobPosts: PropTypes.array,
    currentPage: PropTypes.number,
    recordsPerPage: PropTypes.number,
    handleViewDetails: PropTypes.func,
    handleToggleVisibility: PropTypes.func,
};

export default JobPostListingTable;
