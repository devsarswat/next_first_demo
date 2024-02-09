const blockLayout = ({ children }:{children: React.ReactNode}) => {
    return (
        <html lang="en">
        <body>
            <h1>This is blog Layout page</h1>
            {children}
        </body>
        </html>
    );
    };
export default blockLayout;