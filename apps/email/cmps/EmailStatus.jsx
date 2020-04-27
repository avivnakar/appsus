
export default function EmailStatus(props) {
    const {percent} = props
    const styles={width: percent}
    return (<div className="email-status">
        <div className="read-percent" style={styles}>  </div>
        {percent} %
    </div>)
}
