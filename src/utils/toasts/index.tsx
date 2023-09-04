import { toast } from 'react-toastify';
import { Icon } from "../../components/common";

const toastSuccess = (msg: string) => {
    return toast.success(msg, {
        icon: <span className='bg-white rounded-full w-8 h-8 flex flex-row items-center justify-center'>
            <Icon icon="Checkmark" size={24} className="text-green-500" disableFill />
        </span>
    })
}

const toastError = (msg: string) => {
    return toast.error(msg, {
        icon: <span className='bg-white rounded-full w-8 h-8 flex flex-row items-center justify-center'>
            <Icon icon="Close" size={24} className="text-orange-500" disableFill />
        </span>
    })
}

const toastInfo = (msg: string) => {
    return toast.info(msg, {
        icon:  <span className='bg-white rounded-full w-8 h-8 flex flex-row items-center justify-center'>
            <Icon icon="Info" size={24} className="text-blue-500" disableFill />
        </span>
    })
}

const toastWarning = (msg: string) => {
    return toast.warning(msg, {
        icon:  <span className='bg-white rounded-full w-8 h-8 flex flex-row items-center justify-center'>
            <Icon icon="Info" size={24} className="text-brown-500" disableFill />
        </span>
    })
}

export {
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning
}