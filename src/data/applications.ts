export interface ScoredSentence {
	text: string;
	score: number;
}

export interface Application {
	id: string;
	position: string;
	positionId: string;
	data: {
		grammarScore: number;
		content: {
			skills: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
			education: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
			pastWork: {
				positiveSentences: ScoredSentence[];
				negativeSentences: ScoredSentence[];
			};
		};
		overallScore: number;
	};
}

const applications: Application[] = [
	{
		id: "1237",
		position: "Software Engineer",
		positionId: "12",
		data: {
			grammarScore: 0.8,
			content: {
				skills: {
					positiveSentences: [
						{
							text: "five years of experience with Javascript",
							score: 0.4,
						},
						{
							text: "military expert on nuclear weapons",
							score: 0.1,
						},
						{
							text: "routinely work with relational databases",
							score: 0.4,
						},
						{
							text: "conceptualize and design prototypes",
							score: 0.4,
						},
					],
					negativeSentences: [
						{
							text: "Missing: Docker",
							score: 0.3,
						},
						{
							text: "Missing: TypeScript",
							score: 0.4,
						},
					],
				},
				education: {
					positiveSentences: [
						{
							text: "studied computer science at MIT",
							score: 0.5,
						},
						{
							text: "winner of multiple dance competitions",
							score: 0.0,
						},
						{
							text: "won national physics competition",
							score: 0.3,
						},
					],
					negativeSentences: [],
				},
				pastWork: {
					positiveSentences: [
						{
							text: "built software that crawls job posting sites",
							score: 0.3,
						},
						{
							text: "worked for a marketing agency",
							score: 0.2,
						},
					],
					negativeSentences: [],
				},
			},
			overallScore: 0.92,
		},
	},
	{
		id: "8731",
		position: "Senior ML Engineer",
		positionId: "33",
		data: {
			grammarScore: 0.4,
			content: {
				skills: {
					positiveSentences: [
						{
							text: "going fishing",
							score: 0.1,
						},
						{
							text: "speaks fluent japanese",
							score: 0.2,
						},
						{
							text: "programmed in Java before",
							score: 0.2,
						},
					],
					negativeSentences: [
						{
							text: "is new to the field of ML",
							score: 0.4,
						},
						{
							text: "Missing: Python",
							score: 0.4,
						},
						{
							text: "Missing: PyTorch",
							score: 0.4,
						},
					],
				},
				education: {
					positiveSentences: [
						{
							text: "Bachelor in Philosophy",
							score: 0.0,
						},
						{
							text: "won national dance competition",
							score: 0.0,
						},
					],
					negativeSentences: [
						{
							text: "Missing: CS related study program",
							score: 0.3,
						},
					],
				},
				pastWork: {
					positiveSentences: [
						{
							text: "utilized NLP models to generate tweets",
							score: 0.3,
						},
						{
							text: "worked as a junior Java developer",
							score: 0.2,
						},
					],
					negativeSentences: [],
				},
			},
			overallScore: 0.23,
		},
	},
];

const getApplicationById = (id: string): Application | undefined => {
	return applications.find((x) => x.id === id);
};

export default applications;
export { getApplicationById };
