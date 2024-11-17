import PropTypes from "prop-types";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const ConfirmModal = ({ isOpen, title, onConfirm, onCancel }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onCancel}
            aria-labelledby="confirm-dialog-title"
            aria-describedby="confirm-dialog-description"
        >
            {/* Tiêu đề của Modal */}
            <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>

            {/* Nội dung của Modal */}
            <DialogContent>
                <DialogContentText id="confirm-dialog-description">
                    Bạn có chắc chắn muốn thực hiện hành động này không?
                </DialogContentText>
            </DialogContent>

            {/* Các nút hành động */}
            <DialogActions>
                <Button onClick={onCancel} color="inherit">
                    Hủy
                </Button>
                <Button
                    onClick={onConfirm}
                    variant="contained"
                    sx={{
                        backgroundColor: "#16a34a",
                        color: "white",
                        "&:hover": { backgroundColor: "#15803d" },
                    }}
                >
                    {" "}
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
};

// Định nghĩa PropTypes
ConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Trạng thái mở của modal
    title: PropTypes.string.isRequired, // Tiêu đề modal
    onConfirm: PropTypes.func.isRequired, // Hàm gọi khi nhấn nút Xác nhận
    onCancel: PropTypes.func.isRequired, // Hàm gọi khi nhấn nút Hủy
};

export default ConfirmModal;
