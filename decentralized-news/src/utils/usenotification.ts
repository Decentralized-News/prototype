import { notification } from "antd"

type Severity = "info" | "success" | "error" | "warning"

const useNotification = () => {

    return (serverity: Severity, title: string, message: string) => {
        notification[serverity]({
            message: title,
            description: message,
        });
    }
}

export default useNotification