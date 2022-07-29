import ResourceCard from "./ResourceCard";
import { useParams } from "react-router-dom";

function Resources() {
  const { rec_center_id } = useParams();
  
  return (
    <div>
      This is the page for rec center id: {rec_center_id}
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
    </div>
  );
}

export default Resources;
