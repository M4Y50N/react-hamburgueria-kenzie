import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { api } from "../service/api";
import { Products } from "./Products";

export const Home = () => {
	const [products, setProduct] = useState([]),
		[filterProd, setFilter] = useState("todos");

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await api.get();

				const productsData = response.data;

				setProduct(productsData);
			} catch (error) {
				console.error(error);
			} finally {
			}
		}

		getProducts();
	}, []);

	const filterSearch = (event) => {
		setFilter(!event.target.value.trim() ? "todos" : event.target.value);
	};

	const filteredArray = products.filter((prod, i) => {
		return filterProd === "todos"
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
			<Products products={filteredArray} />
		</>
	);
};
