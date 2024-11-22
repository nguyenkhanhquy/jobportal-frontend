import PropTypes from "prop-types";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Divider } from "@mui/material";

const JobPostInfoModal = ({ open, onClose, jobPost }) => {
    if (!jobPost) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>Chi tiết bài đăng</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ padding: 1 }}>
                    {/* Tiêu đề và công ty */}
                    <Stack direction="column" spacing={1} mb={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }} className="text-green-700">
                            {jobPost.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Công ty: {jobPost.company.name}
                        </Typography>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    {/* Thông tin cơ bản */}
                    <Stack direction="column" spacing={1} mb={2}>
                        <Typography>
                            <b>Vị trí tuyển dụng:</b> {jobPost.jobPosition}
                        </Typography>
                        <Typography>
                            <b>Mức lương:</b> {jobPost.salary || "Thỏa thuận"}
                        </Typography>
                        <Typography>
                            <b>Số lượng tuyển dụng:</b> {jobPost.quantity || "Không giới hạn"}
                        </Typography>
                        <Typography>
                            <b>Loại hợp đồng:</b> {jobPost.type || "Không xác định"}
                        </Typography>
                        <Typography>
                            <b>Hình thức làm việc:</b> {jobPost.remote ? "Làm việc từ xa" : "Làm việc tại chỗ"}
                        </Typography>
                        <Typography>
                            <b>Địa điểm làm việc:</b> {jobPost.address || "Không cung cấp"}
                        </Typography>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    {/* Mô tả công việc */}
                    <Stack direction="column" spacing={1} mb={2}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Mô tả công việc:
                        </Typography>
                        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                            {jobPost.description || "Chưa có thông tin"}
                        </Typography>
                    </Stack>

                    {/* Yêu cầu ứng viên */}
                    <Stack direction="column" spacing={1} mb={2}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Yêu cầu ứng viên:
                        </Typography>
                        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                            {jobPost.requirements || "Chưa có thông tin"}
                        </Typography>
                    </Stack>

                    {/* Quyền lợi */}
                    <Stack direction="column" spacing={1} mb={2}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            Quyền lợi:
                        </Typography>
                        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                            {jobPost.benefits || "Chưa có thông tin"}
                        </Typography>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    {/* Ngày tháng */}
                    <Stack direction="column" spacing={1}>
                        <Typography>
                            <b>Ngày đăng:</b> {new Date(jobPost.createdDate).toLocaleDateString()}
                        </Typography>
                        <Typography>
                            <b>Thời hạn ứng tuyển:</b> {new Date(jobPost.expiryDate).toLocaleDateString()}
                        </Typography>
                    </Stack>
                </Box>
            </DialogContent>
            <DialogActions>
                <button
                    onClick={onClose}
                    className="rounded bg-green-500 px-5 py-2 text-white shadow-md transition-all hover:bg-green-600"
                >
                    Đóng
                </button>
            </DialogActions>
        </Dialog>
    );
};

JobPostInfoModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    jobPost: PropTypes.object.isRequired,
};

export default JobPostInfoModal;
