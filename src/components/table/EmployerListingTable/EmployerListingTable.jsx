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

const EmployerListingTable = ({ loading, employers, currentPage, recordsPerPage, handleLockToggle }) => {
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
                        <TableCell sx={{ width: "20%" }}>Email đăng nhập</TableCell>
                        <TableCell sx={{ width: "20%" }}>Công ty</TableCell>
                        <TableCell sx={{ width: "18%" }}>Người đại diện</TableCell>
                        <TableCell sx={{ width: "14%" }}>Ngày đăng ký</TableCell>
                        <TableCell sx={{ width: "15%" }}>Trạng thái</TableCell>
                        <TableCell sx={{ width: "8%" }} align="center">
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
                            {employers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                        <EmptyBox />
                                    </TableCell>
                                </TableRow>
                            ) : (
                                employers.map((employer, index) => (
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
                                            {employer.email}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {employer.companyName}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            {employer.name}
                                        </TableCell>
                                        <TableCell>
                                            {new Date(employer.registrationDate).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Typography variant="body2" color={employer.locked ? "red" : "green"}>
                                                    {employer.locked ? "Đã khóa" : "Bình thường"}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={1}>
                                                <IconButton
                                                    title="Xem chi tiết"
                                                    color="primary"
                                                    onClick={() => console.log("View details")}
                                                >
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                                <Tooltip title={employer.locked ? "Mở khóa" : "Khóa tài khoản"}>
                                                    <IconButton
                                                        color={"primary"}
                                                        onClick={() => handleLockToggle(employer.id, !employer.locked)}
                                                    >
                                                        {employer.locked ? (
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

EmployerListingTable.propTypes = {
    loading: PropTypes.bool,
    employers: PropTypes.array,
    currentPage: PropTypes.number,
    recordsPerPage: PropTypes.number,
    handleLockToggle: PropTypes.func,
};

export default EmployerListingTable;