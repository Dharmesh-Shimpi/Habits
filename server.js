import server from './routes/routes.js';
import mongoose from 'mongoose';

async function connectDatabase() {
	try {
		await mongoose.connect(
			'mongodb+srv://dharmeshshimpi:q6CWSjiZDgzEsiJv@freecluster.jufmwpo.mongodb.net/habits',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		);
	} catch (error) {
		console.log(error);
	}
}

server.listen(5000, () => {
	connectDatabase();
	console.log('server is listening at port 5000');
});
