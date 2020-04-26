export function LongTxt(props) {
    const { text, isLongTxtShown } = props
    return (

            <span>{isLongTxtShown?text:text.slice(0,100)+'...'}</span>

    )
}