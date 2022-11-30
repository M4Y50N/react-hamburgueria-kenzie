import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Products } from "./Products";

import { api } from "../service/api";

export const Home = () => {
	const [products, setProduct] = useState([]),
		[filterProd, setFilter] = useState("todos"),
		[loading, setLoading] = useState(true);

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await api.get();

				const productsData = response.data;

				setProduct(productsData);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		getProducts();
	}, []);

	const filterSearch = (event) => {
		setFilter(!event.target.value.trim() ? "todos" : event.target.value);
	};

	const filteredArray = products.filter((prod, i) => {
		return filterProd.toLocaleLowerCase() === "todos"
			? true
			: prod.name.toLowerCase().includes(filterProd.toLowerCase()) ||
					prod.category.toLowerCase().includes(filterProd.toLowerCase()) ||
					prod.price
						.toFixed(2)
						.toString()
						.replace(".", ",")
						.includes(filterProd.toLowerCase());
	});

	return (
		<>
			<Header onChange={filterSearch} />
			<Products
				products={filteredArray}
				filterProd={filterProd}
				loading={loading}
			/>
		</>
	);
};
