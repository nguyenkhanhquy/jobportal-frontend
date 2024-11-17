import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import EmptyBox from "../..//box/EmptyBox";

// Dữ liệu mẫu
const sampleData = [
    // {
    //     id: 1,
    //     title: "Frontend Developer - Phát triển giao diện người dùng cho ứng dụng web hiện đại",
    //     jobPosition: "Junior",
    //     companyName: "ABC Corp - Công ty hàng đầu về công nghệ",
    //     expiryDate: new Date("2024-11-30"),
    //     status: "PENDING",
    // },
    // {
    //     id: 2,
    //     title: "Backend Developer",
    //     jobPosition: "Senior",
    //     companyName: "XYZ Ltd",
    //     expiryDate: new Date("2024-12-10"),
    //     status: "ACCEPTED",
    // },
    // {
    //     id: 3,
    //     title: "UI/UX Designer",
    //     jobPosition: "Middle",
    //     companyName: "Creative Studio",
    //     expiryDate: new Date("2024-11-20"),
    //     status: "REJECTED",
    // },
    // {
    //     id: 4,
    //     title: "Fullstack Developer",
    //     jobPosition: "Senior",
    //     companyName: "Tech Solutions",
    //     expiryDate: new Date("2024-11-25"),
    //     status: "APPLIED",
    // },
];

// Hàm chuyển đổi status sang tiếng Việt và trả về Chip tương ứng
const renderStatusChip = (status) => {
    let color, label, backgroundColor;

    switch (status) {
        case "PENDING":
            color = "warning";
            label = "Chờ phỏng vấn";
            backgroundColor = "#fff3e0"; // Màu nền nhạt (light orange)
            break;
        case "APPLIED":
            color = "info";
            label = "Đã ứng tuyển";
            backgroundColor = "#e3f2fd"; // Màu nền nhạt (light blue)
            break;
        case "ACCEPTED":
            color = "success";
            label = "Đã nhận";
            backgroundColor = "#e8f5e9"; // Màu nền nhạt (light green)
            break;
        case "REJECTED":
            color = "error";
            label = "Không nhận";
            backgroundColor = "#ffebee"; // Màu nền nhạt (light red)
            break;
        default:
            color = "default";
            label = "";
            backgroundColor = "#f0f0f0"; // Màu nền nhạt mặc định
            break;
    }

    return (
        <Chip
            label={label}
            color={color}
            variant="outlined"
            sx={{
                width: "100%",
                borderRadius: 1,
                borderWidth: "1px",
                backgroundColor: backgroundColor,
                borderColor: backgroundColor,
                fontWeight: "500",
            }}
        />
    );
};

const AppliedJobsTable = ({ jobsData }) => {
    const [data] = useState(jobsData || sampleData);

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
                        <TableCell sx={{ width: "25%" }}>Tên công việc</TableCell>
                        <TableCell sx={{ width: "20%" }}>Vị trí công việc</TableCell>
                        <TableCell sx={{ width: "20%" }}>Tên công ty</TableCell>
                        <TableCell sx={{ width: "15%" }}>Ngày hết hạn</TableCell>
                        <TableCell sx={{ width: "15%" }}>Trạng thái</TableCell>
                    </TableRow>
                </TableHead>

                {/* Nội dung bảng */}
                <TableBody>
                    {data.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center" sx={{ padding: "40px 0" }}>
                                <EmptyBox />
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((job, index) => (
                            <TableRow
                                key={job.id}
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
                                <TableCell align="center">{index + 1}</TableCell>
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
                                <TableCell>{job.expiryDate.toLocaleDateString("vi-VN")}</TableCell>
                                <TableCell>{renderStatusChip(job.status)}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// Định nghĩa PropTypes
AppliedJobsTable.propTypes = {
    jobsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            jobPosition: PropTypes.string.isRequired,
            companyName: PropTypes.string.isRequired,
            expiryDate: PropTypes.instanceOf(Date).isRequired, // Đảm bảo expiryDate là kiểu Date
            status: PropTypes.string.isRequired,
        }),
    ),
};

export default AppliedJobsTable;
