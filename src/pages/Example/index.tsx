import { useGetPodsQuery } from "../../store/services/testApi";
import { Example } from "./Example";

export const ExamplePage: React.FC = () => {
  const { data } = useGetPodsQuery();
  return (
    <div>
      <Example data={data || []} />
    </div>
  );
}
