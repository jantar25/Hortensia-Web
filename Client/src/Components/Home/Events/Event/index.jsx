import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import {Link} from "react-router-dom"
import {Container,Image,Info,Card,ImgContainer,IconContainer,Title,Desc} from './style'



const Event = ({item}) => {
    return (
            <Container>
                    <Card>
                        <Link to={`/event/find/${item._id}`} style={{textDecoration:"none"}}>
                            <ImgContainer>
                                <Image src={item.img}/>
                            </ImgContainer>
                        </Link>
                        <Info>
                            <Title>{item.title}</Title>
                            <Desc>{item.description.split(' ').splice(0, 15).join(' ')}...</Desc>    
                        </Info>
                        <IconContainer>
                            <ThumbUpAltIcon style={{color :"white"}}/>
                            <CommentIcon style={{color :"white"}} />
                        </IconContainer>
                    </Card>
               
            </Container>
    )
}

export default Event