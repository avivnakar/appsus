export function NoteVideo(props){
    var{url}=props;
    if(url.includes('iframe')){
        url=url.split('src=')[1].split(`"`)[1];
    }else if(url.includes('watch?v=')){
    const id = url.split('watch?v=')[1].split('&')[0];
    url=`https://www.youtube.com/embed/${id}`;
}else if(url.includes('youtu.be')){
    const id = url.split(`youtu.be/`)[1].split('?')[0];
    url=`https://www.youtube.com/embed/${id}`;
    }else return(<span>video was not supported</span>)

    
    return(<iframe width="320" height="240" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
}