// frontend/src/submit.js
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({ nodes: state.nodes, edges: state.edges }));

    const handleSubmit = async () => {
        try {
            // Send the current nodes and edges to the backend
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();
            
            // Alert the user with the results
            alert(`Pipeline Analysis:\n\nNumber of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
            
        } catch (error) {
            console.error("Error parsing pipeline:", error);
            alert("Error parsing pipeline. Is the backend running?");
        }
    };

    return (
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
            Submit
        </button>
    );
}