import PropTypes from "prop-types";
import {
    Table,
    IconButton,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
    Box,
    Typography,
} from "@mui/material";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import EmptyBox from "../../box/EmptyBox";
import CircularProgress from "@mui/material/CircularProgress";

import { formatDate } from "../../../utils/dateUtil";

const AppliedJobsTable = ({ loading, appliedJobPosts, currentPage, recordsPerPage, handleViewDetailsClick }) => {
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
                        <TableCell sx={{ width: "30%" }}>Tên công việc</TableCell>
                        <TableCell sx={{ width: "20%" }}>Vị trí công việc</TableCell>
                        <TableCell sx={{ width: "20%" }}>Tên công ty</TableCell>
                        <TableCell sx={{ width: "15%" }}>Ngày ứng tuyển</TableCell>
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
                            {appliedJobPosts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                        <EmptyBox />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                appliedJobPosts.map((job, index) => (
                                    <TableRow
                                        key={index + 1 + (currentPage - 1) * recordsPerPage}
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
                                        <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {job.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                                            {job.jobPosition}
                                        </TableCell>
                                        <TableCell sx={{ whiteSpace: "normal", wordWrap: "break-word" }}>
                                            {job.companyName}
                                        </TableCell>
                                        <TableCell>{formatDate(job.applyDate)}</TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={1}>
                                                <IconButton
                                                    title="Xem chi tiết"
                                                    color="primary"
                                                    onClick={() => handleViewDetailsClick(job.id)}
                                                >
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                                <IconButton
                                                    title="Xem CV"
                                                    color="secondary"
                                                    onClick={() => {
                                                        if (job?.cv) {
                                                            window.location.href = job.cv;
                                                        } else {
                                                            alert("Cv không tồn tại!");
                                                        }
                                                    }}
                                                >
                                                    <ContactPageOutlinedIcon />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}{" "}
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// Định nghĩa PropTypes
AppliedJobsTable.propTypes = {
    loading: PropTypes.bool,
    appliedJobPosts: PropTypes.array,
    currentPage: PropTypes.number,
    recordsPerPage: PropTypes.number,
    handleViewDetailsClick: PropTypes.func,
};

export default AppliedJobsTable;
