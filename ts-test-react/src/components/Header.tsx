// Header.tsx
interface Props {
    title: string | number;
    color?: string;
}



function Header(props: Props) {
    return (
        <header style={{ color: props.color || "red" }}>{props.title}</header>
    );
}
export default Header;
