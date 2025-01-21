export const metadata ={
    title :'login |  MountRent ',
    description : 'Praktikum SMK Telkom Malang',

}

type PropLayout ={
    children : React.ReactNode
}

const RootLayout = ({ children } : PropLayout) => {
    return (
        <div> {children} </div>
    )
}

export default RootLayout