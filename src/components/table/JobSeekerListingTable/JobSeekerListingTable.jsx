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
    Tooltip,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmptyBox from "../../box/EmptyBox";

const JobSeekerListingTable = ({
    loading,
    jobSeekers,
    currentPage,
    recordsPerPage,
    handleLockToggle,
    onViewDetails,
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
                        <TableCell sx={{ width: "25%" }}>Email đăng nhập</TableCell>
                        <TableCell sx={{ width: "25%" }}>Họ và Tên</TableCell>
                        <TableCell sx={{ width: "15%" }}>Ngày đăng ký</TableCell>
                        <TableCell sx={{ width: "15%" }}>Trạng thái</TableCell>
                        <TableCell sx={{ width: "15%" }} align="center">
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
                            {jobSeekers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                        <EmptyBox />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                jobSeekers.map((seeker, index) => (
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
                                            {seeker.email}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {seeker.fullName}
                                        </TableCell>
                                        <TableCell>{new Date(seeker.registrationDate).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Typography variant="body2" color={seeker.locked ? "red" : "green"}>
                                                    {seeker.locked ? "Đã khóa" : "Bình thường"}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={1}>
                                                <IconButton
                                                    title="Xem chi tiết"
                                                    color="primary"
                                                    onClick={() => onViewDetails(seeker.id)}
                                                >
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                                <Tooltip title={seeker.locked ? "Mở khóa" : "Khóa tài khoản"}>
                                                    <IconButton
                                                        color={"primary"}
                                                        onClick={() => handleLockToggle(seeker.id)}
                                                    >
                                                        {seeker.locked ? (
                                                            <LockOpenIcon className="text-black" />
                                                        ) : (
                                                            <LockIcon className="text-black" />
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

JobSeekerListingTable.propTypes = {
    loading: PropTypes.bool,
    jobSeekers: PropTypes.array,
    currentPage: PropTypes.number,
    recordsPerPage: PropTypes.number,
    handleLockToggle: PropTypes.func,
    onViewDetails: PropTypes.func,
};

export default JobSeekerListingTable;
