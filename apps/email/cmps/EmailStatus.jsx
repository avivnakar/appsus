export default function EmailStatus(props) {
    const {unRead,total} = props
    var percent = 100 * (total - unRead) / total
    const styles={width: percent}
    return (<div className="email-status">
        <div className="read-percent" style={styles}>  </div>
        {unRead} / {total}
    </div>)
}
