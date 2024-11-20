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
    Typography,
    IconButton,
    Stack,
    CircularProgress,
    Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmptyBox from "../../box/EmptyBox";
import { formatDate } from "../../../utils/dateUtil";
import SettingsIcon from "@mui/icons-material/Settings";

const PostedJobsTable = ({
    loading,
    postedJobPosts,
    currentPage,
    recordsPerPage,
    handleViewApplicationsClick,
    handleEditPostClick,
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
                        <TableCell sx={{ width: "20%" }}>Vị trí công việc</TableCell>
                        <TableCell sx={{ width: "15%" }}>Ngày hết hạn</TableCell>
                        <TableCell sx={{ width: "20%" }}>Hồ sơ ứng tuyển</TableCell>
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
                            {postedJobPosts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                        <EmptyBox />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                postedJobPosts.map((job, index) => (
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
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {job.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {job.jobPosition}
                                        </TableCell>
                                        <TableCell>{formatDate(job.expiryDate)}</TableCell>
                                        <TableCell align="center">
                                            <Stack direction="column" spacing={1}>
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                    {job.jobApplyCount} ứng viên
                                                </Typography>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() => handleViewApplicationsClick(job.id)}
                                                >
                                                    Xem
                                                </Button>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                title="Chỉnh sửa"
                                                color="primary"
                                                onClick={() => handleEditPostClick(job.id)}
                                            >
                                                <EditIcon />
                                            </IconButton>
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

PostedJobsTable.propTypes = {
    loading: PropTypes.bool,
    postedJobPosts: PropTypes.array,
    currentPage: PropTypes.number,
    recordsPerPage: PropTypes.number,
    handleViewApplicationsClick: PropTypes.func,
    handleEditPostClick: PropTypes.func,
};

export default PostedJobsTable;
