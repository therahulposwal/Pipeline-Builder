# Pipeline Builder

A full-stack application that enables users to design, visualize, and analyze node-based pipelines. The project consists of a **React-based frontend** for the visual interface and a **FastAPI backend** for processing pipeline logic.

## 🚀 Features

* **Visual Pipeline Editor**: Drag-and-drop interface powered by [React Flow](https://reactflow.dev/).
* **Custom Node Types**: Includes a variety of pre-built nodes:
    * **LLM Node**: For Large Language Model interactions.
    * **Input/Output Nodes**: Define data entry and exit points.
    * **Text Node**: For handling string data.
    * **Logic Nodes**: Transformation, Filter, API Call, Database, and Note nodes.
* **Pipeline Analysis**: Real-time submission to the backend to calculate:
    * Number of Nodes
    * Number of Edges
    * **DAG Detection**: Checks if the created pipeline is a Directed Acyclic Graph (DAG).
* **Responsive Design**: Modern UI styling with React Icons and custom CSS.

## 🛠️ Tech Stack

### Frontend
* **React**: UI library for building the interface.
* **React Flow**: For rendering interactive node-based graphs.
* **Zustand**: State management for handling nodes and edges.
* **React Icons**: Icon library.

### Backend
* **FastAPI**: High-performance web framework for building APIs with Python.
* **Pydantic**: Data validation using Python type hints.
* **Uvicorn**: ASGI server for running the FastAPI app.

## 📂 Project Structure

```text
pipeline-builder/
├── backend/
│   └── main.py          # FastAPI application entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── nodes/       # Custom React Flow node components
│   │   ├── App.js       # Main React component
│   │   ├── store.js     # Zustand state store
│   │   ├── submit.js    # Logic for submitting pipeline to backend
│   │   ├── ui.js        # Main UI layout and React Flow canvas
│   │   └── ...
│   └── package.json     # Frontend dependencies and scripts
└── ...

```

## ⚙️ Installation & Setup

### Prerequisites

* **Node.js** (v14+ recommended)
* **Python** (v3.8+ recommended)

### 1. Backend Setup

Navigate to the `backend` directory and set up the Python environment.

```bash
cd backend

# (Optional) Create a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn

```

**Run the Backend Server:**

```bash
uvicorn main:app --reload --port 8000

```

The backend will be available at `http://localhost:8000`.

### 2. Frontend Setup

Navigate to the `frontend` directory to install dependencies and run the client.

```bash
cd frontend

# Install Node modules
npm install

# Start the development server
npm start

```

The frontend will launch at `http://localhost:3000`.

## 📖 Usage

1. **Open the Application**: Go to `http://localhost:3000` in your browser.
2. **Add Nodes**: Use the toolbar or drag-and-drop functionality to add different types of nodes (Input, LLM, Text, etc.) to the canvas.
3. **Connect Nodes**: Drag from a handle (connector dots) on one node to a handle on another to create an edge.
4. **Submit Pipeline**: Click the **Submit** button.
* The frontend sends the current graph structure to the backend.
* The backend calculates the number of nodes, edges, and checks if the graph is a DAG.
* An alert will display the results of the analysis.



## 📡 API Endpoints

### `GET /`

Returns a simple health check response.

* **Response**: `{'Ping': 'Pong'}`

### `POST /pipelines/parse`

Analyzes the provided pipeline structure.

* **Payload**:
```json
{
  "nodes": [...],
  "edges": [...]
}

```


* **Response**:
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}

```
