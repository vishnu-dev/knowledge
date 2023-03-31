import React from 'react';
import Layout from '@theme/Layout';
import Graph from "react-graph-vis";
import {graph, graphOptions} from "../constants/graph"

export default function TheBrain() {
    return (
        <Layout title="The Brain" description="Computation + Memory = The Brain">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <Graph
                    graph={graph}
                    options={graphOptions}
                    getNetwork={network => {
                        network.stabilize(5);
                    }}
                />
            </div>
        </Layout>
    );
}