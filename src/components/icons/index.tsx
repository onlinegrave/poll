export type IconProps = React.SVGProps<SVGSVGElement>
export const ChevronDownIcon: React.FC<IconProps> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    )
}

export const EditInactiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}


export const EditActiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

export const DuplicateInactiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

export const DuplicateActiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

export const ArchiveInactiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

export const ArchiveActiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

export const MoveInactiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

export const MoveActiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

export const DeleteInactiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

export const DeleteActiveIcon: React.FC<IconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}