export interface ApplicationData {
	grammarScore: number;
}

export interface Application {
	id: string;
	position: string;
	positionId: string;
	data: ApplicationData;
}

const applications: Application[] = [
	{
		id: "1237",
		position: "Junior Software Engineer",
		positionId: "12",
		data: {
			grammarScore: 80,
		},
	},
	{
		id: "3712",
		position: "Junior Software Engineer",
		positionId: "23",
		data: {
			grammarScore: 50,
		},
	},
	{
		id: "8212",
		position: "Human Resources",
		positionId: "22",
		data: {
			grammarScore: 30,
		},
	},
	{
		id: "7412",
		position: "Machine Learning Engineer",
		positionId: "31",
		data: {
			grammarScore: 90,
		},
	},
	{
		id: "9289",
		position: "Machine Learning Engineer",
		positionId: "31",
		data: {
			grammarScore: 60,
		},
	},
	{
		id: "3712",
		position: "Senior Software Engineer",
		positionId: "93",
		data: {
			grammarScore: 70,
		},
	},
];

const getApplicationById = (id: string): Application | undefined => {
	return applications.find((x) => x.id === id);
};

export default applications;
export { getApplicationById };
