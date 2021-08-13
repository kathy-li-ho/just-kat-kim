export const Loading = ({ children }) => {
    return (
        <div className="absolute w-screen h-screen overflow-hidden top-0 left-0">
            {children}
            <div className="absolute z-40 w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 opacity-70"></div>
        </div>
    )
}
