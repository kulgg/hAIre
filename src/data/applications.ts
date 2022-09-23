export interface ScoredSentence {
	text: string;
	score: number;
	missing: boolean;
}

export interface Application {
	id: string;
	position: string;
	positionId: string;
	data: {
		grammarScore: number;
		content: {
			skills: {
				sentences: ScoredSentence[];
			};
			education: {
				sentences: ScoredSentence[];
			};
			pastWork: {
				sentences: ScoredSentence[];
			};
		};
	};
}

const applications: Application[] = [
	{
		id: "1237",
		position: "Junior Software Engineer",
		positionId: "12",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.4,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.3,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.4,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.3,
							missing: false,
						},
					],
				},
			},
		},
	},
	{
		id: "3712",
		position: "Junior Software Engineer",
		positionId: "23",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.8,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.6,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.9,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.6,
							missing: false,
						},
					],
				},
			},
		},
	},
	{
		id: "8212",
		position: "Human Resources",
		positionId: "22",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.8,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.6,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.9,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.6,
							missing: false,
						},
					],
				},
			},
		},
	},
	{
		id: "7412",
		position: "Machine Learning Engineer",
		positionId: "31",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.8,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.6,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.9,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.6,
							missing: false,
						},
					],
				},
			},
		},
	},
	{
		id: "9289",
		position: "Machine Learning Engineer",
		positionId: "31",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.8,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.6,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.9,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.6,
							missing: false,
						},
					],
				},
			},
		},
	},
	{
		id: "3712",
		position: "Senior Software Engineer",
		positionId: "93",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					sentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.8,
							missing: false,
						},
						{
							text: "Docker",
							score: 0.6,
							missing: true,
						},
					],
				},
				education: {
					sentences: [
						{
							text: "studied computer science at MIT",
							score: 0.9,
							missing: false,
						},
					],
				},
				pastWork: {
					sentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.6,
							missing: false,
						},
					],
				},
			},
		},
	},
];

const getApplicationById = (id: string): Application | undefined => {
	return applications.find((x) => x.id === id);
};

export default applications;
export { getApplicationById };
