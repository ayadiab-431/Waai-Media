import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './TextLink.css';
export default function TextLink ({textLink, toLink, isCard = false, center = false}) {
    return (
        <Link className="text-link d-flex align-items-center jusdtify-content-center " to = {toLink} 
            style={{fontSize: isCard ? "12px" : "14", margin: center ? '0 auto' : ''}}>
            <span>{textLink}</span>
            <ArrowForwardIcon className="p-1" style={{fontSize: isCard ? "20px" : ""}}/>
        </Link>
    );
}